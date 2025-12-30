# Variable Size - Longest Substring Without Repeating Characters

Tags: sliding window, string

### Question

*Given a string `s`, find the length of the **longest** **substring** without duplicate characters.*

### Ideas

- Use the sliding window technique, and a set to keep track of the character.
- *Once we find a character that exist in the set, we keep deleting all the character from the start until the set has only unique character.*
- *Then we move the right pointer forward.*

### Implementations

```jsx
  function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    const set = new Set();
    let i = 0;
    let j = 0;
    while (j < s.length) {
      if (!set.has(s[j])) {
        set.add(s[j]);
        longest = Math.max(longest, set.size);
        j++;
      } else {
        set.delete(s[i]);
        i++;
      }
    }
    return longest;
  }
```