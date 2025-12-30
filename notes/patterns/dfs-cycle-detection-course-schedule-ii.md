# DFS Cycle Detection - Course Schedule II

Tags: dfs, graph

### Question

*There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.*

- *For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.*

*Return the ordering of courses you should take to finish all courses. If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.*

### Implementation

```jsx
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
   * return truea if there is cycle
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