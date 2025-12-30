# LRU Cache

Tags: linked list

### Question

- *Design a data structure that follows the constraints of a [**Least Recently Used (LRU) cache**](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU).*
- *Implement the `LRUCache` class:*
- `*LRUCache(int capacity)` Initialize the LRU cache with **positive** size `capacity`.*
- `*int get(int key)` Return the value of the `key` if the key exists, otherwise return `1`.*
- `*void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict** the least recently used key.*
- *The functions `get` and `put` must each run in `O(1)` average time complexity.*

### Ideas

The tricky part is `put` must be implemented in `O(1)` . For `get` we can easily use hash map, but to remove the LRU item, we need a data structure that can keep the order, grow in size with O(1). So a double linked list is the best option

### Implementations

```jsx
class DLNode {
  key: number;
  val: number;
  next: DLNode | null;
  prev: DLNode | null;
  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  head: DLNode;
  tail: DLNode;
  size: number;
  capacity: number;
  map: Map<number, DLNode>;

  constructor(capacity: number) {
    this.head = new DLNode(0, 0);
    this.tail = new DLNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key)!;
    this.moveToFront(node);
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!;
      node.val = value;
      this.moveToFront(node);
    } else {
      const newNode = new DLNode(key, value);
      this.map.set(key, newNode);
      this.addNode(newNode);
      this.size++;

      if (this.size > this.capacity) {
        const tail = this.popTail();
        this.map.delete(tail.key);
        this.size--;
      }
    }
  }

  private addNode(node: DLNode): void {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  private removeNode(node: DLNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private moveToFront(node: DLNode): void {
    this.removeNode(node);
    this.addNode(node);
  }

  private popTail(): DLNode {
    const res = this.tail.prev!;
    this.removeNode(res);
    return res;
  }
}

```