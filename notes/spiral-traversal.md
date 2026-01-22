# Spiral Traversal

Tags: array, matrix

### Question

Given an `m x n` `matrix`, return *all elements of the* `matrix` *in spiral order*.

### Implementation

```jsx
function spiralOrder(matrix: number[][]): number[] {
        const result: number[] = [];
    const cols = matrix[0].length;
    const rows = matrix.length;
    enum DIRECTION {
      UP = "UP",
      DOWN = "DOWN",
      RIGHT = "RIGHT",
      LEFT = "LEFT"
    }
    const moves = {
      [DIRECTION.DOWN]: [1, 0],
      [DIRECTION.UP]: [-1, 0],
      [DIRECTION.LEFT]: [0, -1],
      [DIRECTION.RIGHT]: [0, 1]
    };
    let steps = 0;
    function isValid(x: number, y: number): boolean {
      return x >= 0 && x < rows && y >= 0 && y < cols && matrix[x][y] !== 101;
    }
    // find the next step
    let nextR = 0;
    let nextC = 0;
    function traverse(x: number, y: number, direction: DIRECTION) {
      while (steps < cols * rows) {
        result.push(matrix[x][y]);
        // increase the step
        steps++;
        // mark as visited
        matrix[x][y] = 101;

        switch (direction) {
          case DIRECTION.DOWN:
            nextR = x + moves[direction][0];
            nextC = y + moves[direction][1];
            if (!isValid(nextR, nextC)) {
              // instead of moving down, need to move left
              direction = DIRECTION.LEFT;
              nextR = x + moves[direction][0];
              nextC = y + moves[direction][1];
            }
            break;

          case DIRECTION.UP:
            nextR = x + moves[direction][0];
            nextC = y + moves[direction][1];
            if (!isValid(nextR, nextC)) {
              // instead of moving up, need to move right
              direction = DIRECTION.RIGHT;
              nextR = x + moves[direction][0];
              nextC = y + moves[direction][1];
            }
            break;

          case DIRECTION.RIGHT:
            nextR = x + moves[direction][0];
            nextC = y + moves[direction][1];
            if (!isValid(nextR, nextC)) {
              // instead of moving right, need to move down
              direction = DIRECTION.DOWN;
              nextR = x + moves[direction][0];
              nextC = y + moves[direction][1];
            }
            break;

          case DIRECTION.LEFT:
            nextR = x + moves[direction][0];
            nextC = y + moves[direction][1];
            if (!isValid(nextR, nextC)) {
              // instead of moving down, need to move left
              direction = DIRECTION.UP;
              nextR = x + moves[direction][0];
              nextC = y + moves[direction][1];
            }
            break;
        }
        traverse(nextR, nextC, direction);
      }
    }
    traverse(nextR, nextC, DIRECTION.RIGHT);

    return result;
};
```