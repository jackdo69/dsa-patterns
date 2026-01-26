function combinationSum(candidates: number[], target: number): number[][] {
  const result : number[][] = [];

  function dfs(idx: number, path: number[], sum:number) {
    if (sum === target) {
      result.push([...path])
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      const num = candidates[i]
      if (sum + num > target) continue;
      path.push(num)
      dfs(i, path, sum + num)
      path.pop()
    }
  }
  dfs(0, [], 0)

  return result;    
};