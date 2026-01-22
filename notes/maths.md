# Maths

### Base

Human system mainly use base 10 (decimal), so each position represents a power of 10

Example:

**352**

- 2 = ones place (10⁰)
- 5 = tens place (10¹)
- 3 = hundreds place (10²)

### Modular

Modulo (`%`) gives you the **remainder** after division. When you divide and have a remainder left over, that remainder is the modulo. Think of this as a “wrap around”, this becomes every useful in some algorithm to stop the numbers become so large, because the result is always smaller than the divisor. Some key characteristics

```jsx
(a + b) % n = ((a % n) + (b % n)) % n
(a × b) % n = ((a % n) × (b % n)) % n
(a - b) % n = ((a % n) - (b % n)) % n
```

### Logarithm

Log represents *"To what power must we raise a base to get a number?”* In other words, log is the inverse of the exponentiation.

- Many algorithms **split problems in half** (divide and conquer)
- Binary search, merge sort, binary trees all use this principle

```jsx
If 2^x = n, then log₂(n) = x
```

### Permutations & Factorial

- **Set**: A collection of distinct elements where order doesn't matter (e.g., {a, b})
- **Permutation**: A specific ordered arrangement of set elements where order matters (e.g., [a, b] and [b, a] are different)

Example with a set of 3 letters {a,b,c} if we try to form a permutation, the first position will have 3 choice, second position will have 2 choice, and third will have 1 choice. Altogether we have 3 * 2 * 1 = 3! = 6 permutations

### Subsets

A subset is another set that contains all the element of the original set. In order to form a subset, for each element of the original set, we have 2 options

Include it or exclude it

So a set of `n` elements will have 2 ^ n subsets. 

Some examples of this decision making are binary tree `O(logn)`. And the opposite of time complexity backtracking with `O(2^n)`

```jsx
                   {}
                 /    \
               {1}     {}
              /  \     /  \
          {1,2}  {1} {2}   {}
          /  \    / \  / \  / \
    {1,2,3}{1,2}{1,3}{1}{2,3}{2}{3}{}
```