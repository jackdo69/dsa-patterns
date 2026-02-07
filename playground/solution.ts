function longestSubsequence(arr: number[], difference: number): number {
  const dp = new Map<number, number>();
  let max = 1;

  for (const num of arr) {
    const prev = dp.get(num - difference) ?? 0;
    dp.set(num, prev + 1);
    max = Math.max(max, prev + 1);
  }

  return max;
}
