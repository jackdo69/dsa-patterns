# Expanding from Center - Longest Palindrome Substring

Tags: string, two pointer

### Question

*Given a string `s`, return the longest palindromic substring in `s`.*

### Implementations

```jsx
function expand(s: string, start: number, end: number): string {
  while (start >= 0 && end <= s.length - 1 && s[start] === s[end]) {
    start--;
    end++;
  }
  // Return the substring after expanding until mismatch
  return s.substring(start + 1, end);
}

function longestPalindrome(s: string): string {
  if (!s || s.length <= 1) {
    return s;
  }

  let longest = s.substring(0, 1); // Start with first char as initial palindrome

  for (let i = 0; i < s.length; i++) {
    // Odd-length palindrome (center is s[i])
    let temp = expand(s, i, i);
    if (temp.length > longest.length) {
      longest = temp;
    }

    // Even-length palindrome (center between s[i] and s[i + 1])
    temp = expand(s, i, i + 1);
    if (temp.length > longest.length) {
      longest = temp;
    }
  }

  return longest;
}

```