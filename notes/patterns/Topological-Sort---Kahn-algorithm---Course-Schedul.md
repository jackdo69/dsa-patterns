# Topological Sort - Kahn algorithm - Course Schedule

Tags: bfs, graph

### **Question**

*There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.*

- *For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.*

*Return `true` if you can finish all courses. Otherwise, return `false`.*

### Ideas

- The order of vertices in a acyclic directed graph (DAG)  so that if there is a direction between vertex *u* and vertex *v,* then vertex u will appear before vertex v in the order. This algorithm is very useful for task scheduling when one task is relying on another task
- **Steps:**
1. Initialize a hash map to store the in-degrees (count of edges go into this vertex)
2. Go through the nodes, count the in-degree of each node.
3. Push the nodes with 0 in-degree into the queue.
4. Pop each node from the queue, subtract 1 from the in-degree of each of its neighbors (each node it points to).
5. If a node's in-degree drops to 0, then push it into the queue.
6. repeat until the queue is empty. If any nodes remain unprocessed, then there must be a cycle.

### Implementation

```jsx
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const inDegree = new Map();
  const subcourses = new Map();
  for (let i = 0; i < numCourses; i++) {
    inDegree.set(i, 0);
  }
  for (const [curr, preq] of prerequisites) {
    inDegree.set(curr, inDegree.get(curr) + 1);
    subcourses.set(preq, [...(subcourses.get(preq) || []), curr]);
  }
  const queue: number[] = [];

  for (const course of Array.from(inDegree.keys())) {
    if (inDegree.get(course) === 0) queue.push(course);
  }
  let courses = 0;
  while (queue.length) {
    const course = queue.shift();
    courses++;
    if (courses === numCourses) return true;
    const children = subcourses.get(course);
    if (children && children.length) {
      for (const c of children) {
        const degree = inDegree.get(c);
        inDegree.set(c, degree - 1);
        if (degree === 1) queue.push(c);
      }
    }
  }
  return courses === numCourses;
}
```