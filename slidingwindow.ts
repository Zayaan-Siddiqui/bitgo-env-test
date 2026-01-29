function longestSubstringAtMostKDistinct(s: string, k: number): number {
  if (k <= 0 || s.length === 0) return 0;

  const freq = new Map<string, number>();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s.charAt(right);
    freq.set(ch, (freq.get(ch) ?? 0) + 1);

    while (freq.size > k) {
      const leftCh = s.charAt(left);
      const nextCount = (freq.get(leftCh) ?? 0) - 1;
      if (nextCount === 0) freq.delete(leftCh);
      else freq.set(leftCh, nextCount);
      left++;
    }

    best = Math.max(best, right - left + 1);
  }

  return best;
}
console.log(longestSubstringAtMostKDistinct("eceba", 2));
console.log(longestSubstringAtMostKDistinct("aa", 1));
