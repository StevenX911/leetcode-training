/**
 * 字符串 Z型转换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows <= 1) {
        return s;
    }
    // 获取行数
    const len = Math.min(s.length, numRows);
    // 使用数组来存储每一行字符串
    const rows = new Array(len);
    // 默认填充空串
    rows.fill('');

    // 当前字符串数组的下标
    let loc = 0;
    // 是否向下遍历
    let down = false;

    // 迭代字符串并填充数组
    for (const c of s) {
        rows[loc] += c;
        // 当下标到底顶部或者底部，切换方向
        if (loc === 0 || loc === len - 1) {
            down = !down;
        }
        loc += down ? 1 : -1;
    }

    // 合并数组返回新新串
    return rows.join('');
};

module.exports = {
    convert
};
