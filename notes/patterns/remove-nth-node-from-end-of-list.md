# Remove Nth Node from End of list

Tags: linked list, stack

### Question

*Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.*

### Implementations

```jsx
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return head;
    // traverse to the end of the list
    // build a stack then traverse back
    const stack: ListNode[] = [];
    let curr: ListNode | null = head;
    while (curr) {
      stack.push(curr);
      curr = curr.next;
    }

    if (n === stack.length) return head.next;
    let counter = 1;
    while (counter <= n) {
      curr = stack.pop()!;
      counter++;
    }
    // pointer the previous node to the new end
    const nextNode = stack.pop()!;
    nextNode.next = curr!.next;

    return head;
};
```