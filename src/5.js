/**
 * 找出最长回文子串
 * 解法一：暴力循环 O(n3)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length;
    if (len <= 1) {
        return s;
    }
    let res = s[0];
    for (let i = 0; i < len - res.length; i++) {
        for (let j = i + res.length; j < len; j++) {
            // 深入理解一下str->slice，结果不包含end
            let cache = s.slice(i, j + 1);
            for (let x = 0; x <= Math.ceil(cache.length / 2) - 1; x++) {
                // 从中间开始判断，减少执行次数
                if (cache[x] !== cache[cache.length - 1 - x]) {
                    break;
                } else if (x === Math.ceil(cache.length / 2) - 1) {
                    if (res.length < cache.length) {
                        res = cache;
                    }
                }
            }
        }
    }
    return res;
};

/**
 * 找出最长回文子串
 * 解法二：动态规划 O(n2)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function (s) {
    // todo
    throw new Error(s);
};

/**
 * 找出最长回文子串
 * 解法三：中心扩散 O(n2)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome3 = function (s) {
    // todo
    throw new Error(s);
};

module.exports = {
    longestPalindrome,
    longestPalindrome2,
    longestPalindrome3
};