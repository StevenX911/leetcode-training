/**
 * 寻找两个正序数组的中位数 解法一
 * 数组拼接、排序、查找
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Node端和浏览器端对sort实现逻辑不一样 上一句浏览器不能处理，而node可以
    // 不过参见MDN说明，浏览器的实现更为标准
    // let nums = nums1.concat(nums2).sort((i,j) => i < j);
    let nums = nums1.concat(nums2).sort((i, j) => i - j);

    let len = nums.length;
    if (len > 0 && len % 2 === 0) {
        return (nums[len / 2 - 1] + nums[len / 2]) / 2;
    } else {
        return nums[(len - 1) / 2];
    }
};

module.exports = {
    findMedianSortedArrays
};
