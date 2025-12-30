# Union Find / Disjoint Set - Number of Operations to make Network Connected

Tags: graph

### Question

- *There are `n` computers numbered from `0` to `n - 1` connected by ethernet cables `connections` forming a network where `connections[i] = [ai, bi]` represents a connection between computers `ai` and `bi`. Any computer can reach any other computer directly or indirectly through the network.*
- *You are given an initial computer network `connections`. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected.*
- *Return the minimum number of times you need to do this in order to make all the computers connected. If it is not possible, return `-1`.*

### Implementations

```jsx
  function makeConnected(n: number, connections: number[][]): number {
  // we need minimum n-1 connections
  if (connections.length < n - 1) return -1;

  // use union find to determine number of connected components
  const parent = Array.from({ length: n }, (curr, index) => index);

  // recursively look up
  function findParent(i: number): number {
    if (parent[i] !== i) parent[i] = findParent(parent[i]);
    return parent[i];
  }

  // set parent of y as parent of x
  function union(x: number, y: number): void {
        parent[findParent(x)] = findParent(y);
  }

  for (const [i, j] of connections) {
    union(i, j);
  }

  // for each components/sub networks, there will always 1 computer that is the parent of itself
  let num = 0;
  for (let i = 0; i < n; i++) {
    if (parent[i] === i) num++;
  }
  // to connect all subnet to make the whole network connected, we need num - 1 connections
  return num - 1;
}
```