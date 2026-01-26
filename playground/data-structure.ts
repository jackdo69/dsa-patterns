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
export class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
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

export class HeapItem<T> {
  public weight: number;
  public value: T;
  constructor(_val: T, _weight: number) {
    this.weight = _weight;
    this.value = _val;
  }
}
export class _MinHeap<T> {
  private items: Array<HeapItem<T>>;
  constructor() {
    this.items = [];
  }

  swap(i: number, j: number): void {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }

  bubbleUp(): void {
    let index = this.items.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.items[parent].weight <= this.items[index].weight) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  bubbleDown(): void {
    let index = 0;
    const n = this.items.length;
    while (index < n - 1) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left < n && this.items[left].weight < this.items[smallest].weight) smallest = left;
      if (right < n && this.items[right].weight < this.items[smallest].weight) smallest = right;
      if (smallest === index) break;
      this.swap(index, smallest);
      index = smallest;
    }
  }

  public push(item: HeapItem<T>) {
    this.items.push(item);
    this.bubbleUp();
  }

  public pop(): HeapItem<T> | null {
    if (this.items.length === 0) return null;
    this.swap(0, this.items.length - 1);
    const item = this.items.pop()!;
    this.bubbleDown();
    return item;
  }

  public size(): number {
    return this.items.length;
  }
}
