import {_MinHeap, HeapItem} from "./data-structure"
function networkDelayTime(times: number[][], n: number, k: number): number {
  const adjList = new Map<number,HeapItem<number>[]>()
  for (const [source, dest, weight] of times) {
    const item = new HeapItem(dest,weight)
    adjList.set(source, [...(adjList.get(source) || []), item])
  }
  const shortest = new Map<number, number> ()
  for (let i = 1; i <= n; i++) shortest.set(i, Infinity)
    shortest.set(k,0) // start from k

  const heap = new _MinHeap<number>()
  heap.push(new HeapItem<number>(k,0))

  while (heap.size()) {
    const {value: node, weight: currentTime} = heap.pop()!;
    if (currentTime > shortest.get(node)!) continue;
    for (const {value: nextNode, weight: travelTime} of adjList.get(node) || []) {
      const shortestTime = shortest.get(nextNode)!;
      const newTime = currentTime + travelTime
      if (newTime < shortestTime) {
        shortest.set(nextNode, newTime)
        heap.push(new HeapItem(nextNode, newTime))
      }
    }
  }
  const result = Math.max(...(shortest.values()))
  return result === Infinity ? -1 : result

};