# Variable Size - Longest Substring Without Repeating Characters

Tags: sliding window, string

### Interview Frequency

High

### Question

*Given a string `s`, find the length of the **longest** **substring** without duplicate characters.*

### Ideas

- Use the sliding window technique, and a set to keep track of the character.
- *Once we find a character that exist in the set, we keep deleting all the character from the start until the set has only unique character.*
- *Then we move the right pointer forward.*

### Solution

```typescript
function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let l = 0;
  let r = 0;
  let max = 0;
  while (r < s.length) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    r++;
    max = Math.max(max, set.size);
  }
  return max;
}
```