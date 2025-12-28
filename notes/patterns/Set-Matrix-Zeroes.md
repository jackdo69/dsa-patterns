# Set Matrix Zeroes

Tags: matrix

### Question

Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`'s.

You must do it [in place](https://en.wikipedia.org/wiki/In-place_algorithm).

### Implementation

```jsx
function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const set = new Set<string>(); // Store visited cells for efficiency

  function helper(x: number, y: number) {
    // Set all elements in the same row to 0
    for (let i = 0; i < cols; i++) {
      if (!set.has(`${x},${i}`) && matrix[x][i] !== 0) {
        matrix[x][i] = 0;
        set.add(`${x},${i}`); // Mark as visited
      }
    }

    // Set all elements in the same column to 0
    for (let i = 0; i < rows; i++) {
      if (!set.has(`${i},${y}`) && matrix[i][y] !== 0) {
        matrix[i][y] = 0;
        set.add(`${i},${y}`); // Mark as visited
      }
    }
  }

  // Iterate over the matrix to find all zeros
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0 && !set.has(`${i},${j}`)) {
        set.add(`${i},${j}`); // Add the original zero to the set
        helper(i, j);
      }
    }
  }
}
```