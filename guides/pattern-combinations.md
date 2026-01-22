# Pattern Combinations for Advanced Problems

Most hard interview problems require combining multiple patterns. This guide shows common combinations and how to recognize when multiple techniques are needed.

---

## 🎯 Why Patterns Combine

**Single Pattern Problems:** Typically Easy to Medium
**Multi-Pattern Problems:** Typically Medium to Hard

**Key Insight:** When a straightforward pattern doesn't fully solve the problem, look for combinations!

---

## 🔗 Common Two-Pattern Combinations

### 1. Sliding Window + Hash Map

**When:** Track frequencies or unique elements within a window

**Pattern:**
- Sliding window manages the range
- Hash map tracks element frequencies/occurrences

**Example Problems:**
- **Longest Substring Without Repeating Characters** (LC #3)
  - Sliding window: expand/contract range
  - Hash map: track last seen position of characters
  ```javascript
  function lengthOfLongestSubstring(s) {
      let map = new Map();
      let left = 0, maxLen = 0;

      for (let right = 0; right < s.length; right++) {
          if (map.has(s[right])) {
              left = Math.max(left, map.get(s[right]) + 1);
          }
          map.set(s[right], right);
          maxLen = Math.max(maxLen, right - left + 1);
      }
      return maxLen;
  }
  ```

- **Find All Anagrams in a String** (LC #438)
  - Sliding window: fixed size k
  - Hash map: compare frequency maps

- **Minimum Window Substring** (LC #76)
  - Variable sliding window
  - Hash map: track required characters

**Recognition:** "substring/subarray" + "unique/frequency/distinct count"

---

### 2. DFS/BFS + Memoization (DP)

**When:** Graph/tree problems with overlapping subproblems

**Pattern:**
- DFS/BFS explores paths
- Memoization caches results to avoid recomputation

**Example Problems:**
- **Word Break** (LC #139)
  - DFS: try breaking at each position
  - Memo: cache results for each starting index
  ```javascript
  function wordBreak(s, wordDict, start = 0, memo = {}) {
      if (start === s.length) return true;
      if (memo[start] !== undefined) return memo[start];

      for (let word of wordDict) {
          if (s.startsWith(word, start)) {
              if (wordBreak(s, wordDict, start + word.length, memo)) {
                  return memo[start] = true;
              }
          }
      }
      return memo[start] = false;
  }
  ```

- **Longest Increasing Path in a Matrix** (LC #329)
  - DFS: explore all 4 directions
  - Memo: cache longest path from each cell

- **Number of Ways to Stay in Same Place After Some Steps** (LC #1269)
  - DFS: explore all moves
  - Memo: cache (position, steps remaining)

**Recognition:** "count paths/ways" + "graph/tree" + "same subproblems appear"

---

### 3. Binary Search + DP

**When:** DP solution is O(n²) and can be optimized

**Pattern:**
- DP maintains state
- Binary search optimizes transition

**Example Problems:**
- **Longest Increasing Subsequence** (LC #300)
  - DP: O(n²) solution
  - DP + Binary Search: O(n log n) optimization
  ```javascript
  function lengthOfLIS(nums) {
      let tails = []; // tails[i] = smallest tail of LIS with length i+1

      for (let num of nums) {
          // Binary search for position
          let left = 0, right = tails.length;
          while (left < right) {
              let mid = Math.floor((left + right) / 2);
              if (tails[mid] < num) left = mid + 1;
              else right = mid;
          }
          tails[left] = num;
          if (left === tails.length) tails.push(num);
      }
      return tails.length;
  }
  ```

- **Russian Doll Envelopes** (LC #354)
  - Sort + LIS with binary search

**Recognition:** "DP works but too slow" + "monotonic property exists"

---

### 4. Heap + Hash Map

**When:** Need top K elements with frequency/counting

**Pattern:**
- Hash map counts occurrences
- Heap selects top K

**Example Problems:**
- **Top K Frequent Elements** (LC #347)
  - Hash map: count frequencies
  - Min heap: maintain top k
  ```javascript
  function topKFrequent(nums, k) {
      let freq = new Map();
      for (let num of nums) {
          freq.set(num, (freq.get(num) || 0) + 1);
      }

      // Use heap to get top k
      let heap = new MinHeap((a, b) => a[1] - b[1]);
      for (let [num, count] of freq) {
          heap.push([num, count]);
          if (heap.size() > k) heap.pop();
      }
      return heap.values.map(x => x[0]);
  }
  ```

- **Top K Frequent Words** (LC #692)
  - Hash map: count words
  - Heap: maintain top k (with lexicographic order)

**Recognition:** "top K" + "frequency/count"

---

### 5. Two Pointers + Sorting

**When:** Find pairs/triplets with specific sum

**Pattern:**
- Sort array first
- Use two pointers to find pairs

**Example Problems:**
- **3Sum** (LC #15)
  - Sort array: O(n log n)
  - Two pointers: O(n²)
  ```javascript
  function threeSum(nums) {
      nums.sort((a, b) => a - b);
      let result = [];

      for (let i = 0; i < nums.length - 2; i++) {
          if (i > 0 && nums[i] === nums[i-1]) continue; // skip duplicates

          let left = i + 1, right = nums.length - 1;
          while (left < right) {
              let sum = nums[i] + nums[left] + nums[right];
              if (sum === 0) {
                  result.push([nums[i], nums[left], nums[right]]);
                  while (left < right && nums[left] === nums[left+1]) left++;
                  while (left < right && nums[right] === nums[right-1]) right--;
                  left++; right--;
              } else if (sum < 0) left++;
              else right--;
          }
      }
      return result;
  }
  ```

- **4Sum** (LC #18)
  - Sort + nested two pointers

- **3Sum Closest** (LC #16)
  - Sort + two pointers with distance tracking

**Recognition:** "sum to target" + "multiple elements" + "all pairs/triplets"

---

### 6. Prefix Sum + Hash Map

**When:** Subarray sum equals target (not necessarily contiguous sum)

**Pattern:**
- Prefix sum tracks cumulative sum
- Hash map stores prefix sums seen

**Example Problems:**
- **Subarray Sum Equals K** (LC #560)
  - Prefix sum: calculate cumulative
  - Hash map: check if (prefix - k) exists
  ```javascript
  function subarraySum(nums, k) {
      let prefixSum = 0;
      let map = new Map([[0, 1]]); // prefix sum -> count
      let count = 0;

      for (let num of nums) {
          prefixSum += num;
          if (map.has(prefixSum - k)) {
              count += map.get(prefixSum - k);
          }
          map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
      }
      return count;
  }
  ```

- **Continuous Subarray Sum** (LC #523)
  - Prefix sum with modulo
  - Hash map: track remainder positions

- **Subarray Sums Divisible by K** (LC #974)
  - Prefix sum + modulo
  - Hash map: count remainders

**Recognition:** "subarray sum" + "equals/divisible by"

---

### 7. Trie + Backtracking

**When:** Word search in grid/board

**Pattern:**
- Trie stores dictionary efficiently
- Backtracking explores all paths

**Example Problems:**
- **Word Search II** (LC #212)
  - Trie: store all words
  - Backtracking: explore grid
  ```javascript
  function findWords(board, words) {
      let trie = new Trie();
      words.forEach(word => trie.insert(word));

      let result = new Set();
      let rows = board.length, cols = board[0].length;

      function backtrack(row, col, node, path) {
          if (node.isEnd) result.add(path);
          if (row < 0 || row >= rows || col < 0 || col >= cols) return;
          if (board[row][col] === '#') return;

          let char = board[row][col];
          if (!node.children.has(char)) return;

          board[row][col] = '#'; // mark visited
          let nextNode = node.children.get(char);

          // Explore 4 directions
          backtrack(row+1, col, nextNode, path + char);
          backtrack(row-1, col, nextNode, path + char);
          backtrack(row, col+1, nextNode, path + char);
          backtrack(row, col-1, nextNode, path + char);

          board[row][col] = char; // restore
      }

      for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
              backtrack(i, j, trie.root, '');
          }
      }
      return Array.from(result);
  }
  ```

- **Word Search** (LC #79) - simpler version without Trie

**Recognition:** "find words" + "grid/board" + "multiple words"

---

### 8. BFS + Visited Set/Map

**When:** Shortest path with state tracking

**Pattern:**
- BFS guarantees shortest path
- Visited set prevents cycles
- Sometimes need state tracking (position + other info)

**Example Problems:**
- **Word Ladder** (LC #127)
  - BFS: level by level transformation
  - Visited: avoid revisiting words
  ```javascript
  function ladderLength(beginWord, endWord, wordList) {
      let wordSet = new Set(wordList);
      if (!wordSet.has(endWord)) return 0;

      let queue = [[beginWord, 1]];
      let visited = new Set([beginWord]);

      while (queue.length) {
          let [word, level] = queue.shift();
          if (word === endWord) return level;

          // Try all possible transformations
          for (let i = 0; i < word.length; i++) {
              for (let c = 97; c <= 122; c++) { // 'a' to 'z'
                  let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i+1);
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

- **Open the Lock** (LC #752)
  - BFS: shortest path to combination
  - Visited: avoid repeated states

- **Shortest Path in Binary Matrix** (LC #1091)
  - BFS: level = distance
  - Visited: avoid cycles

**Recognition:** "shortest path/distance" + "transformations" + "avoid cycles"

---

### 9. Union Find + Sorting

**When:** Minimum spanning tree or merge groups by priority

**Pattern:**
- Sort edges/elements by weight/priority
- Union Find merges components

**Example Problems:**
- **Kruskal's Algorithm (MST)** (LC #1584)
  - Sort edges by weight
  - Union Find connects components
  ```javascript
  function minCostConnectPoints(points) {
      // Build all edges
      let edges = [];
      for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
              let dist = Math.abs(points[i][0] - points[j][0]) +
                        Math.abs(points[i][1] - points[j][1]);
              edges.push([dist, i, j]);
          }
      }

      // Sort by distance
      edges.sort((a, b) => a[0] - b[0]);

      let uf = new UnionFind(points.length);
      let cost = 0, edgesUsed = 0;

      for (let [dist, u, v] of edges) {
          if (uf.union(u, v)) {
              cost += dist;
              edgesUsed++;
              if (edgesUsed === points.length - 1) break;
          }
      }
      return cost;
  }
  ```

- **Account Merge** (LC #721)
  - Sort/group by priority
  - Union Find merges accounts

**Recognition:** "minimum spanning" + "connect components" + "weighted"

---

### 10. Binary Search + Greedy

**When:** Minimize maximum or maximize minimum

**Pattern:**
- Binary search on answer space
- Greedy checks if answer is feasible

**Example Problems:**
- **Split Array Largest Sum** (LC #410)
  - Binary search: possible max sums
  - Greedy: check if can split with given max
  ```javascript
  function splitArray(nums, m) {
      let left = Math.max(...nums);
      let right = nums.reduce((a, b) => a + b);

      function canSplit(maxSum) {
          let subarrays = 1, currentSum = 0;
          for (let num of nums) {
              if (currentSum + num > maxSum) {
                  subarrays++;
                  currentSum = num;
              } else {
                  currentSum += num;
              }
          }
          return subarrays <= m;
      }

      while (left < right) {
          let mid = Math.floor((left + right) / 2);
          if (canSplit(mid)) {
              right = mid;
          } else {
              left = mid + 1;
          }
      }
      return left;
  }
  ```

- **Capacity to Ship Packages Within D Days** (LC #1011)
  - Binary search: ship capacity
  - Greedy: check if can ship in D days

- **Koko Eating Bananas** (LC #875)
  - Binary search: eating speed
  - Greedy: check if can finish in time

**Recognition:** "minimize the maximum" or "maximize the minimum"

---

## 🎯 Advanced Three-Pattern Combinations

### 11. Sliding Window + Two Pointers + Hash Map

**Example:** Substring problems with complex constraints
- **Minimum Window Substring** (LC #76)
  - Sliding window: manage range
  - Two pointers: left and right
  - Hash map: track required character counts

### 12. DFS + DP + Backtracking

**Example:** Count all paths with optimization
- **Target Sum** (LC #494)
  - Backtracking: explore +/- choices
  - DP: memoize (index, sum) states
  - DFS: recursive exploration

### 13. BFS + DP + Priority Queue

**Example:** Shortest path with state transitions
- **Shortest Path Visiting All Nodes** (LC #847)
  - BFS: explore states
  - DP: track (node, visited set) states
  - Priority Queue: optimize exploration order

### 14. Topological Sort + DP

**Example:** Longest path in DAG
- **Longest Increasing Path in a Matrix** (LC #329)
  - Can view as topological sort
  - DP: memoize path lengths
  - DFS: explore dependencies

---

## 🔍 How to Identify Multi-Pattern Problems

### Red Flags That Suggest Multiple Patterns:

1. **"Find shortest/longest..." + additional constraint**
   - Example: "Shortest path that visits all nodes"
   - Likely: BFS + state tracking + DP

2. **"Count ways..." + optimization needed**
   - Example: "Count paths with at most k steps"
   - Likely: DFS + DP memoization

3. **"In O(n log n)..." on array problem**
   - Example: "Longest increasing subsequence in O(n log n)"
   - Likely: DP + Binary Search

4. **"Top K..." with additional property**
   - Example: "Top K frequent words (lexicographically)"
   - Likely: Hash Map + Heap + custom comparator

5. **"Substring/Subarray" + frequency/distinct constraint**
   - Example: "Longest substring with at most k distinct"
   - Likely: Sliding Window + Hash Map

6. **"Graph/Tree" + "count/find all"**
   - Example: "Count unique paths in grid"
   - Likely: DFS + Memoization (DP)

7. **"Sum equals K" but not simple**
   - Example: "Subarray sum equals K"
   - Likely: Prefix Sum + Hash Map

---

## 💡 Strategy for Solving Multi-Pattern Problems

### Step-by-Step Approach:

**1. Identify the core pattern (30 sec)**
- What category is this? (Array, Tree, Graph, etc.)
- What's the main operation? (Search, count, optimize, etc.)

**2. Recognize why single pattern isn't enough (1 min)**
- "This needs BFS but also needs to track state" → BFS + Map
- "This needs DP but needs optimization" → DP + Binary Search
- "This needs counting but also selection" → Hash Map + Heap

**3. Break down into sub-problems (2 min)**
- What does each pattern handle?
- How do they interact?
- What's the data flow?

**4. Design the solution (5 min)**
- Sketch out the structure
- Identify the order of operations
- Plan data structures needed

**5. Implement (20 min)**
- Code one pattern at a time
- Test each part separately if possible
- Combine carefully

**6. Test & Optimize (5 min)**
- Walk through examples
- Check edge cases
- Verify complexity

---

## 📊 Pattern Combination Matrix (Quick Reference)

| Pattern 1 | Pattern 2 | Common Use Case | Example Problem |
|-----------|-----------|-----------------|-----------------|
| Sliding Window | Hash Map | Substring with frequency constraints | LC #3, #76, #438 |
| DFS/BFS | DP (Memo) | Count paths in graph | LC #139, #329 |
| DP | Binary Search | Optimize DP transition | LC #300, #354 |
| Heap | Hash Map | Top K with counting | LC #347, #692 |
| Two Pointers | Sorting | Find pairs/triplets | LC #15, #18 |
| Prefix Sum | Hash Map | Subarray sum problems | LC #560, #974 |
| Trie | Backtracking | Word search in grid | LC #212 |
| BFS | Visited Set | Shortest path with states | LC #127, #752 |
| Union Find | Sorting | MST, merge by priority | LC #1584, #721 |
| Binary Search | Greedy | Min-max optimization | LC #410, #1011 |
| Monotonic Stack | DP | Rectangle problems | LC #84, #85 |
| DFS | Monotonic Stack | Next greater with paths | Advanced problems |

---

## 🎓 Practice Progression

### Level 1: Master Single Patterns First
- Complete all 75 individual patterns
- Solve 2-3 problems for each pattern
- Build strong foundation

### Level 2: Two-Pattern Combinations
- Start with common pairs (Sliding Window + Hash Map)
- Practice 10-15 two-pattern problems
- Understand how patterns interact

### Level 3: Three-Pattern Combinations
- Tackle complex problems
- Combine techniques fluidly
- Optimize solutions

### Level 4: Pattern Recognition Speed
- Identify combinations in < 2 minutes
- Implement solutions efficiently
- Handle variations confidently

---

## 🚀 Top 20 Multi-Pattern Problems to Master

### Must-Solve Problems:

1. **LC #3** - Longest Substring Without Repeating (SW + HM)
2. **LC #76** - Minimum Window Substring (SW + HM)
3. **LC #15** - 3Sum (Two Pointers + Sorting)
4. **LC #139** - Word Break (DFS + DP)
5. **LC #212** - Word Search II (Trie + Backtracking)
6. **LC #300** - Longest Increasing Subsequence (DP + Binary Search)
7. **LC #347** - Top K Frequent Elements (HM + Heap)
8. **LC #560** - Subarray Sum Equals K (Prefix Sum + HM)
9. **LC #127** - Word Ladder (BFS + Visited)
10. **LC #329** - Longest Increasing Path (DFS + DP)
11. **LC #410** - Split Array Largest Sum (Binary Search + Greedy)
12. **LC #23** - Merge k Sorted Lists (Heap + Linked List)
13. **LC #295** - Find Median from Data Stream (Two Heaps)
14. **LC #42** - Trapping Rain Water (Two Pointers + DP or Stack)
15. **LC #84** - Largest Rectangle (Monotonic Stack + DP)
16. **LC #239** - Sliding Window Maximum (SW + Monotonic Queue)
17. **LC #1584** - Min Cost to Connect Points (Union Find + Sorting)
18. **LC #787** - Cheapest Flights Within K (Bellman Ford or Dijkstra + DP)
19. **LC #1143** - Longest Common Subsequence (Dual Sequence DP)
20. **LC #312** - Burst Balloons (Interval DP)

---

## 📝 Key Takeaways

1. **Most hard problems require 2-3 patterns combined**
2. **Master single patterns before attempting combinations**
3. **Learn to recognize when single pattern isn't enough**
4. **Practice explaining how patterns work together**
5. **Build intuition through repetition**

---

## Next Steps

1. Complete single patterns (study-plan.md)
2. Start with easiest combinations (Sliding Window + Hash Map)
3. Progress to harder combinations
4. Practice the Top 20 problems above
5. Time yourself on multi-pattern problems

Understanding pattern combinations is what separates good from great interview performance! 🚀
