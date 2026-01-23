# Word Ladder

Topic: graph, bfs, string

Difficulty: Hard

Interview Frequency: Medium

### Question

*Given two words `beginWord` and `endWord`, and a dictionary `wordList`, return the number of words in the **shortest transformation sequence** from `beginWord` to `endWord`, such that:
- Only one letter can be changed at a time.
- Each transformed word must exist in the word list.*

*Return 0 if no such sequence exists.*
### Ideas

Model this as an unweighted graph problem: each word is a node, and edges connect words that differ by exactly one letter. The shortest path in an unweighted graph is found by BFS.

For efficient neighbor finding, instead of comparing every pair of words O(n² · L), use a wildcard pattern approach:
- For each word, generate patterns by replacing each character with `*` (e.g., "hot" → "*ot", "h*t", "ho*").
- Build a map from patterns to words. Two words are neighbors if they share a pattern.

BFS from `beginWord`, expanding level by level. The first time you reach `endWord` gives the shortest path length.

### Solution

```typescript
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue: [string, number][] = [[beginWord, 1]];
  const visited = new Set<string>([beginWord]);

  while (queue.length > 0) {
    const [word, level] = queue.shift()!;

    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) { // 'a' to 'z'
        const char = String.fromCharCode(c);
        if (char === word[i]) continue;

        const newWord = word.slice(0, i) + char + word.slice(i + 1);

        if (newWord === endWord) return level + 1;

        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, level + 1]);
        }
      }
    }
  }

  return 0;
}
```
