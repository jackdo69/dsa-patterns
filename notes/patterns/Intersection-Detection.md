# Intersection Detection

Tags: linked list, two pointer

### Question

Given the heads of two singly linked-lists `headA` and `headB`, return *the node at which the two lists intersect*. If the two linked lists have no intersection at all, return `null`.

### Ideas

- We use 2 pointers, 1 from each list, if one list ends, we move the pointer to the second list, and vice versa
- 2 cases will happen
    - if 2 list intersects, then the different in length will be from 2 heads to the intersection point, since 2 pointers have to travel that both of that different length, it will meet in the intersection point
    
    ```jsx
    List A: a1 -> a2 -> c1 -> c2
    List B: b1 -> b2 -> b3 -> c1 -> c2
    
    pointerA: a1 -> a2 -> c1 -> c2 -> b1 -> b2 -> b3 -> c1
    pointerB: b1 -> b2 -> b3 -> c1 -> c2 -> a1 -> a2 -> c1
    ```
    
    - if 2 list don’t intersects, both pointer will eventually becomes `null` then the loop exits
    
    ```jsx
    List A: 1 -> 2 -> 3 -> null
    List B: 4 -> 5 -> null
    pointerA: 1 -> 2 -> 3 -> null -> 4 -> 5 -> null
    pointerB: 4 -> 5 -> null -> 1 -> 2 -> 3 -> null
    ```
    

### Implementation

```jsx
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;
    
    let pointerA: ListNode | null = headA;
    let pointerB: ListNode | null = headB;
    
    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }
    
    return pointerA; // Will be null if lists don't intersect
}
```