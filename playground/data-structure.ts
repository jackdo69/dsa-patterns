export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function buildTree(values: (number | null)[]): TreeNode | null {
  if (!values.length || values[0] === null) return null;

  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length && i < values.length) {
    const node = queue.shift()!;

    // Left child
    if (i < values.length && values[i] !== null) {
      node.left = new TreeNode(values[i] ?? undefined);
      queue.push(node.left);
    }
    i++;

    // Right child
    if (i < values.length && values[i] !== null) {
      node.right = new TreeNode(values[i] ?? undefined);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

export function printTree(root: TreeNode | null): void {
  if (!root) {
    console.log("Empty tree");
    return;
  }

  // Function to get the height of the tree
  const getHeight = (node: TreeNode | null): number => {
    if (!node) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  };

  // Calculate actual height needed for display (multiply by 2 for connections)
  const treeHeight = getHeight(root);
  const displayHeight = treeHeight * 2 - 1;
  const width = Math.pow(2, treeHeight) * 2;

  // Initialize the levels array with correct dimensions
  const levels: string[][] = Array(displayHeight)
    .fill(null)
    .map(() => Array(width).fill(" "));

  // Function to fill the levels array
  const fill = (node: TreeNode | null, level: number, left: number, right: number) => {
    if (!node) return;

    const mid = Math.floor((left + right) / 2);

    // Place the node value
    levels[level][mid] = node.val.toString();

    // Draw left child connection
    if (node.left) {
      const childMid = Math.floor((left + mid) / 2);
      for (let i = mid - 1; i > childMid; i--) {
        levels[level + 1][i] = " ";
      }
      levels[level + 1][childMid] = "/";
      fill(node.left, level + 2, left, mid);
    }

    // Draw right child connection
    if (node.right) {
      const childMid = Math.floor((mid + right) / 2);
      for (let i = mid + 1; i < childMid; i++) {
        levels[level + 1][i] = " ";
      }
      levels[level + 1][childMid] = "\\";
      fill(node.right, level + 2, mid, right);
    }
  };

  fill(root, 0, 0, width - 1);

  // Print the tree
  levels.forEach((level) => {
    console.log(level.join("").replace(/\s+$/, "")); // Remove trailing spaces
  });
}
