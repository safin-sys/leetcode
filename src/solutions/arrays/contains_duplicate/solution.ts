const contains_duplicate = (nums: number[]): boolean => {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};

export default contains_duplicate;
