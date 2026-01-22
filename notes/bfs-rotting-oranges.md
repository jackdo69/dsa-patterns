# BFS - Rotting Oranges

Tags: bfs, grid

### Question

*You are given an `m x n` `grid` where each cell can have one of three values:*

- `*0` representing an empty cell,*
- `*1` representing a fresh orange, or*
- `*2` representing a rotten orange.*

*Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.*

*Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.*

### Implementation

```jsx
function orangesRotting(grid: number[][]): number {
  let fresh = 0;
  const rowSize = grid.length;
  const columnSize = grid[0].length;
  const rotten: number[][] = [];

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < columnSize; j++) {
      if (grid[i][j] === 1) fresh++;
      else if (grid[i][j] === 2) rotten.push([i, j]);
    }
  }

  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  const isValid = (r: number, c: number) => r >= 0 && r < rowSize && c >= 0 && c < columnSize;

  let minutes = 0;
  let head = 0;

  while (head < rotten.length) {
    const size = rotten.length - head;
    for (let i = 0; i < size; i++) {
      const [row, col] = rotten[head];
      head++;
      for (const [x, y] of moves) {
        const newRow = row + x;
        const newCol = col + y;
        if (!isValid(newRow, newCol) || grid[newRow][newCol] !== 1) continue;
        grid[newRow][newCol] = 2;
        fresh--;
        rotten.push([newRow, newCol]);
      }
    }
    if (head < rotten.length) minutes++;
  }

  return fresh === 0 ? minutes : -1;
}
```