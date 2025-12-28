# Dual Sequence - Longest Common Subsequence (LCS)

Tags: dynamic programming

### Question

*Given two strings `text1` and `text2`, return the length of their longest **common subsequence**. If there is no **common subsequence**, return `0`. A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. For example, `"ace"` is a subsequence of `"abcde"`.  A **common subsequence** of two strings is a subsequence that is common to both strings.*

### Ideas

- `dp[i][j]` represents the length of the longest common subsequence from index `i` of text1 and index `j` of text2 to the end.
- if we found a matching character, we add 1 to the solution of the rest of both string
- if no character found, we have 2 choice, either skip the position in text1 or skip the position in text 2
- Time complexity: O(m*n)

### Implementation

```jsx
  function longestCommonSubsequence(text1: string, text2: string): number {
    // We need a 2-d grid to solve this problem using DP
    const n = text1.length;
    const m = text2.length;
    // we go out of bound by 1 because we need to get the value of the next grid
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        if (text1[i] === text2[j]) {
          // if 2 characters matched, the value of the grid equas the value longest common subsequence of postfix plus 1
          dp[i][j] = 1 + dp[i + 1][j + 1]; // out of bound value is required here
        } else {
          // No matched, we have 2 options, get the max value of both
          dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
        }
      }
    }
    return dp[0][0];
  }
```