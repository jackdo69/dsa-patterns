# DFS Cycle Detection - Course Schedule II

Topic: dfs, graph

Difficulty: Medium

Interview Frequency: High

### Question

*There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.*

- *For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.*

*Return the ordering of courses you should take to finish all courses. If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.*

### Ideas

This is **topological sort** with **cycle detection**. If there's a cycle, it's impossible to complete all courses (circular dependency).

**Two sets to track state:**
- `visited` — course is fully processed (all prerequisites done)
- `cycle` — course is currently being explored (in the current DFS path)

**How cycle detection works:**

```
Course A → B → C → A  (cycle!)

Exploring A: cycle = {A}
  Exploring B: cycle = {A, B}
    Exploring C: cycle = {A, B, C}
      Exploring A: A is in cycle set → CYCLE DETECTED!
```

If we revisit a node that's already in the `cycle` set, we've found a back-edge → cycle exists.

**Why this gives topological order:**

We add a course to the result **after** all its prerequisites are processed (post-order). This ensures prerequisites come before the course that needs them.

```
Prerequisites: [1,0], [2,1]  (0 → 1 → 2)

DFS from 2:
  → needs 1 → needs 0
  → 0 has no prereqs → add 0 to result
  → 1's prereqs done → add 1 to result
  → 2's prereqs done → add 2 to result

Result: [0, 1, 2] ✓
```

### Solution

```typescript
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const result: number[] = [];
  const prereqList = new Map<number, number[]>();

  for (const [main, pre] of prerequisites) {
    prereqList.set(main, [...(prereqList.get(main) || []), pre]);
  }
  const visited = new Set<number>();
  // detect cycle
  const cycle = new Set<number>();

  /**
   * loop through any prerequisite if existed
   * return true if there is cycle
   * add to visited and the course to result if no cycle detected
   */
  function hasCycle(course: number): boolean {
    if (cycle.has(course)) return true;
    if (visited.has(course)) return false;

    cycle.add(course);
    for (const pre of prereqList.get(course) || []) {
      if (hasCycle(pre)) return true;
    }

    cycle.delete(course);
    visited.add(course);
    result.push(course);
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return [];
  }
  return result;
}
```

### See Also

- [Topological Sort (concept)](notes/topological-sort-wiki.md) — what it is and when to use it
- [Kahn's Algorithm (BFS)](notes/topological-sort-kahn-algorithm-course-schedul.md) — alternative using BFS + in-degree
