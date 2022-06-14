function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const result = target - cur;
    if (map.has(result)) {
      return [map.get(result), i];
    }
    map.set(cur, i);
  }
}
