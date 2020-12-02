const {
    reverse
} = require('../src/7.js');

const {
    expect
} = require('chai');

describe('整数反转', function () {
    it('123 期望 321', function () {
        expect(reverse(123)).to.equal(321);
    });
    it('-123 期望 -321', function () {
        expect(reverse(-123)).to.equal(-321);
    });
    it('120 期望 21', function () {
        expect(reverse(120)).to.equal(21);
    });
    // js中没有int类型，Number数值范围包含int，所以最大的32位有符号整数位 2^31 -1
    it('2147483647 期望 0', function () {
        expect(reverse(2147483647)).to.equal(0);
    });
    it('-2147483648 期望 0', function () {
        expect(reverse(2147483647)).to.equal(0);
    });
});