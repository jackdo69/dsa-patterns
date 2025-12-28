# Shortest Path - Dijkstra algorithm - Network Delay time

Tags: graph, heap

### Ideas

- Dijkstra algorithm was designed to find the shortest path between 2 nodes where all the edges are positive. In Dijkstra algorithm, each node will only be visited once.
- **Time complexity:** *O*((*V*+*E*)log*V*) ****where V is the number of vertices and E is the number of edges, this is due to each vertex and edge is process with log V of the priority queue

### Implementations

**Question:** *You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = (ui, vi, wi)`, where `ui` is the source node, `vi` is the target node, and `wi` is the time it takes for a signal to travel from source to target.*

*We will send a signal from a given node `k`. Return the **minimum** time it takes for all the `n` nodes to receive the signal. If it is impossible for all the `n` nodes to receive the signal, return `-1`.*

```jsx
function networkDelayTime(times: number[][], n: number, k: number): number {
    // adjacency list
    const adjList = new Map<number, number[][]>();
    for (const [source, target, time] of times) {
      adjList.set(source, [...(adjList.get(source) || []), [target, time]]);
    }
    if (!adjList.has(k)) return -1;

    // closest distances from k
    const distances = new Map<number, number>();

    for (let i = 1; i <= n; i++) {
      // distance to k is 0, the rest we don't know so set to Infinity
      distances.set(i, i === k ? 0 : Infinity);
    }

    const heap = new MinHeap();
    heap.push([k, 0]);

    while (heap.size()) {
      const [node, currentTime] = heap.pop();
      // we only update the distance if the distance 
      //is smaller the the one in our distances Map
      if (currentTime > distances.get(node)!) continue; 

      // start exploring the other nodes that we can go 
      // from this node and update distances if they are smaller
      for (const [neighbor, travelTime] of adjList.get(node) || []) {
        // time from k to the node then from node to its neighbor
        const newTime = currentTime + travelTime; 
        if (newTime < distances.get(neighbor)!) {
          distances.set(neighbor, newTime);
          // add it to the heap so we can explore its neighbor
          heap.push([neighbor, newTime]); 
        }
      }
    }

    let maxTime = 0;
    for (const time of distances.values()) {
      if (time === Infinity) return -1; // we haven't visited this node
      maxTime = Math.max(time, maxTime);
    }
    return maxTime;
  }
```