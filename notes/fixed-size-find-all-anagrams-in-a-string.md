# Fixed Size - Find all anagrams in a string

Topic: sliding window, string

Difficulty: Medium

Interview Frequency: High

### Question

*Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`. You may return the answer in **any order**.*

### Ideas

- Use a fixed-size sliding window of length `p`
- Maintain a frequency map of characters in the current window
- Compare the window's frequency map with `p`'s frequency map to check for anagrams
- When the window exceeds size `p.length`, shrink from the left by decrementing the character count
- **Time complexity:** O(n) where n is the length of s

### Solution

```typescript
function findAnagrams(s: string, p: string): number[] {
  function isAnagram(m1: Map<string, number>, m2: Map<string, number>): boolean {
    for (const k of [...m1.keys()]) {
      if (!m2.has(k)) return false;
      if (m1.get(k) !== m2.get(k)) return false;
    }
    return true;
  }
  const res: number[] = [];
  if (s.length < p.length) return res;

  const pMap = new Map();
  for (const c of p) {
    if (!pMap.has(c)) pMap.set(c, 0);
    pMap.set(c, pMap.get(c) + 1);
  }

  const sMap = new Map();
  let left = 0;
  let right = 0;
  while (right < s.length) {
    const c = s[right];
    if (!sMap.has(c)) sMap.set(c, 0);
    sMap.set(c, sMap.get(c) + 1);

    if (right - left + 1 > p.length) {
      sMap.set(s[left], sMap.get(s[left]) - 1);
      if (sMap.get(s[left]) === 0) sMap.delete(s[left]);
      left++;
    }

    if (right - left + 1 === p.length && isAnagram(sMap, pMap)) res.push(left);

    right++;
  }
  return res;
}
```