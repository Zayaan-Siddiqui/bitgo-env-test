"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longestSubstringAtMostKDistinct(s, k) {
    var _a, _b;
    if (k <= 0 || s.length === 0)
        return 0;
    const freq = new Map();
    let left = 0;
    let best = 0;
    for (let right = 0; right < s.length; right++) {
        const ch = s.charAt(right);
        freq.set(ch, ((_a = freq.get(ch)) !== null && _a !== void 0 ? _a : 0) + 1);
        while (freq.size > k) {
            const leftCh = s.charAt(left);
            const nextCount = ((_b = freq.get(leftCh)) !== null && _b !== void 0 ? _b : 0) - 1;
            if (nextCount === 0)
                freq.delete(leftCh);
            else
                freq.set(leftCh, nextCount);
            left++;
        }
        best = Math.max(best, right - left + 1);
    }
    return best;
}
console.log(longestSubstringAtMostKDistinct("eceba", 2));
console.log(longestSubstringAtMostKDistinct("aa", 1));
//# sourceMappingURL=slidingwindow.js.map