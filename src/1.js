/**
 * 两数之和 解法一
 * 暴力循环 两次for循环
 * 空间复杂度 O(1)
 * 时间复杂度 O(n2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let another = target - nums[i];
        for (let j = i + 1; j < len; j++) {
            if (nums[j] === another) {
                return [i, j];
            }
        }
    }
    return [];
};

/**
 * 两数之和 解法二
 * 空间换时间 单次for循环
 * 利用Map缓存已经遍历过的数据元素及对应下标
 * 空间复杂度 O(n)
 * 时间复杂度 O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
    let len = nums.length;

    let map = new Map();
    for (let i = 0; i < len; i++) {
        let currentNum = nums[i];
        let anotherNum = target - currentNum;
        let anotherNumIndex = map.get(anotherNum);
        if (anotherNumIndex !== undefined) {
            return [anotherNumIndex, i];
        } else {
            // 消除重复值对下标的更新
            if (!map.has(currentNum)) {
                map.set(currentNum, i);
            }
        }
    }
    return [];
};

/**
 * 两数之和 解法三
 * 利用数组indexOf遍历
 * 空间复杂度：O(1)
 * 时间复杂度: O(n2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum3 = function (nums, target) {
    let len = nums.length;

    let obj = [];
    for (var i = 0; i < len; i++) {
        target -= nums[i];
        let index = nums.indexOf(target, i + 1);
        if (index > 0) {
            obj.push(i);
            obj.push(index);
            break;
        } else {
            target += nums[i];
        }
    }
    return obj;
};

/**
 * 两数之和 解法四
 * 使用Object作为Map存储键值对
 * 空间复杂度：O(n)
 * 时间复杂度: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum4 = function (nums, target) {
    let len = nums.length;

    let obj = {};
    for (let i = 0; i < len; i++) {
        let currentNum = nums[i];
        let anotherNum = target - currentNum;
        let anotherNumIndex = obj[anotherNum];
        if (anotherNumIndex !== undefined) {
            return [anotherNumIndex, i];
        } else {
            if (obj[currentNum] === undefined) {
                obj[currentNum] = i;
            }
        }
    }
    return [];
};

module.exports = {
    twoSum,
    twoSum2,
    twoSum3,
    twoSum4
};
