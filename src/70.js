/**
 * 递归分治
 * 时间复杂度 O(2^n)
 * 空间复杂度 O(n)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 1) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }

    return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * 动态规划，自底向上，利用中间变量
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function (n) {
    if (n < 1) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }

    let a = 1;
    let b = 2;
    let temp = 0;

    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
};

module.exports = {
    climbStairs,
    climbStairs2
};