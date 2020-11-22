/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 方法一：暴力循环
    // 时间复杂度：O(n2)
    // 空间复杂度：O(n)
    let arr = [], max = 0, len = s.length;
    for (let i = 0; i < len; i++){
        let index = arr.indexOf(s[i]);
        if (index !== -1) {
            // 删除重复项之前的数据
            arr.splice(0, index + 1);
        }
        arr.push(s.charAt(i));
        max = Math.max(arr.length, max);
    }
    return max;
};

module.exports = {
    lengthOfLongestSubstring
};