# Reordering/ Partitioning - Rotate List

Tags: linked list

### Question

Given the `head` of a linked list, rotate the list to the right by `k` places.

### Implementation

```jsx
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head;
    
    // Count length and get to last node
    let length = 1;
    let tail = head;
    while (tail.next) {
        length++;
        tail = tail.next;
    }
    
    // Calculate actual rotation needed
    k = k % length;
    if (k === 0) return head;
    
    // Find new tail position (length - k - 1)
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail!.next;
    }
    
    // Perform rotation
    const newHead = newTail!.next;
    newTail!.next = null;
    tail.next = head;
    
    return newHead;
}
```