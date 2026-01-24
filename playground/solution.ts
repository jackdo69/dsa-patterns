function search(nums: number[], target: number): number {
  const n = nums.length;
  const last = nums[n - 1];

  /**
   * find the pivot, the first element that is smaller than last
   */
  let left = 0;
  let right = nums.length - 1;
  let pivot = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > last) {
      left = mid + 1;
    } else {
      pivot = mid;
      right = mid - 1;
    }
  }

  function bSearch(i: number, j: number): number {
    while (i <= j) {
      const mid = Math.floor((i + j) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
    return -1;
  }
  return target >= nums[pivot] && target <= nums[n - 1] ? bSearch(pivot, n - 1) : bSearch(0, pivot - 1);
}
const nums = [1];
console.log(search(nums, 1));
