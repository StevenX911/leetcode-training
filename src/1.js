/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let len = nums.length;
    // 解法一：暴力循环
    // 空间复杂度 O(1)
    // 时间复杂度 O(n2)
    // for (let i = 0; i < len; i++) {
    //     let another = target - nums[i];
    //     for (let j = i + 1; j < len; j++) {
    //         if (nums[j] == another) {
    //             return [i, j];
    //         }
    //     }
    // }

    // 优化方案：空间换时间
    // 利用Map缓存已经遍历过的数据元素及对应下标
    // 将两次循环改为单次循环
    // 空间复杂度 O(n)
    // 时间复杂度 O(n)
    let map = new Map();
    map.set(nums[0], 0);
    for (let i = 1; i < len; i++) {
        let current_num = nums[i];
        let another_num = target - nums[i];
        if (map.has(another_num)) {
            return [map.get(another_num), i];
        } else {
            // 消除重复值对下标的更新
            if (!map.has(current_num)) {
                map.set(current_num, i);
            }
        }
    }
};

module.exports = {
    twoSum
};