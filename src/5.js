/**
 * 找出最长回文子串
 * 解法一：暴力循环
 * 时间复杂度 O(n3)
 * 空间复杂度 O(n)
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
            // 判断是否为回文字符串
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
 * 解法二：动态规划
 * 时间复杂度 O(n2)
 * 空间复杂度 O(n2)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function (s) {
    let len = s.length;
    if (len <= 1) {
        return s;
    }
    let res = '';
    //创建二维数组
    let dp = Array.from(new Array(len), () => new Array(len).fill(0));
    //从字符串首部开始
    for (let i = 0; i < len; i++) {
        //从字符串i前开始依次向前查找
        for (let j = i; j >= 0; j--) {
            // 状态转移方程
            dp[j][i] = s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1]);
            if (dp[j][i] && i - j + 1 > res.length) {
                res = s.substring(j, i + 1);
            }
        }
    }
    return res;
};

/**
 * 找出最长回文子串
 * 解法三：中心扩散
 * 时间复杂度 O(n2)
 * 空间复杂度 O(1)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome3 = function (s) {
    let len = s.length;
    if (len <= 1) {
        return s;
    }

    // 找出回文子串的左右边界
    function getLeftAndRight(left, right) {
        while (left >= 0 && right < len && s[left] === s[right]) {
            left -= 1;
            right += 1;
        }
        return {
            left: left + 1,
            right: right - 1
        };
    }

    let start = 0,
        end = 0;
    for (let i = 0; i < len; i++) {
        let obj = getLeftAndRight(i, i); // aba型
        let obj2 = getLeftAndRight(i, i + 1); // abba型
        let max = obj.right - obj.left > obj2.right - obj2.left ? obj : obj2;
        if (max.right - max.left > end - start) {
            start = max.left;
            end = max.right;
        }
    }
    return s.slice(start, end + 1);
};

/**
 * 找出最长回文子串
 * 解法四：Manacher
 * @param {string} s
 * @return {string}
 */
var longestPalindrome4 = function (s) {
    // todo
    throw new Error(s);
};

module.exports = {
    longestPalindrome,
    longestPalindrome2,
    longestPalindrome3,
    longestPalindrome4
};
