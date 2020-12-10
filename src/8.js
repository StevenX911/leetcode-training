/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const number = parseInt(s, 10);
    if (isNaN(number)) {
        return 0;
    } else {
        return number << 0 === number ? number : (number > 0 ? 2 ** 31 - 1 : -(2 ** 31));
    }
};

module.exports = {
    myAtoi
};