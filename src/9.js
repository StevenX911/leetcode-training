/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }
    // 获取x的数量级
    let n = 10 ** Math.floor(Math.log10(x));
    // 利用数量级求出首位整数 和 对数字求余获得位数，若数字为回文，则两数应相等
    while (n > 1 && x > 0) {
        if (Math.floor(x / n) !== x % 10) {
            return false;
        }
        x = Math.floor((x % n) / 10);
        n /= 100; // 数量级每次降10^2
    }
    return true;
};

module.exports = {
    isPalindrome
};