/**
 * 整数反转
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    /*
    `result * 10 + x % 10` 取出末位 `x % 10`（负数结果还是负数，无需关心正负），拼接到 result 中。
    `x / 10` 去除末位，`| 0` 强制转换为32位有符号整数。
    通过 `| 0` 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）。
    `result | 0` 超过32位的整数转换结果不等于自身，可用作溢出判断。
    */
    /**
    * 算法的精妙之处在于：
    * 1. 利用位运算进行取整，因为浮点数不支持位运算，所以会进行类型转换，直接得到整数部分
    * 2. 利用位运算进行整数溢出判断，按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成）
    */
    let result = 0;
    while (x !== 0) {
        result = result * 10 + x % 10;
        x = (x / 10) | 0;
    }
    result = (result | 0) === result ? result : 0;
    return result;
};

/**
 * 解法二，将数字转为字符串，然后转为数组，再进行reverse
*/

module.exports = {
    reverse
};