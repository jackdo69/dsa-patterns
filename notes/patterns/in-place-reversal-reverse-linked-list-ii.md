# In-Place Reversal - Reverse Linked List II

Tags: linked list

### Question

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return *the reversed list*.

### Ideas

For example, with list `1→2→3→4→5` (reversing from 2 to 4):

```jsx
Step 1 (initially):
prevReversed = null
curr = 2
next = 3

Step 2 (after first iteration):
prevReversed = 2
curr = 3
next = 4
Links: 2→null

Step 3 (after second iteration):
prevReversed = 3
curr = 4
next = 5
Links: 3→2→null

Step 4 (after third iteration):
prevReversed = 4
curr = 5
Links: 4→3→2→null
```

visual

```jsx
Before reversal:
1 → 2 → 3 → 4 → 5
    ^
    curr

During reversal:
prevReversed acts as new head of reversed portion
1 → 2 ← 3 ← 4   5
    ^   ^   ^   ^
    end prev  curr
```

### Implementation

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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head) return null;

  let dummy: ListNode = new ListNode(0, head);
  let prev: ListNode | null = dummy;

  // Move `prev` to the node before `left`
  for (let i = 0; i < left - 1; i++) {
    prev = prev!.next;
  }

  let curr: ListNode | null = prev!.next;
  let next: ListNode | null = null;
  let prevReversed: ListNode | null = null;

  // Reverse the sublist from `left` to `right`
  for (let i = left; i <= right; i++) {
    next = curr!.next; // store the curr.next reference
    curr!.next = prevReversed; // point curr to prev
    prevReversed = curr; // move prev to left
    curr = next; // move curr to the left using the stored reference
  }

  // Connect reversed sublist back
  prev!.next!.next = curr; // Connect last node of reversed part to `curr` which is the element right after the reverse range
  prev!.next = prevReversed; // Connect node before `left` to the new head of reversed part

  return dummy.next;
}
```