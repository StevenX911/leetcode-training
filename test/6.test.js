const {
    convert
} = require('../src/6.js');

const {
    expect
} = require('chai');

describe('字符串 Z 字形变换', function () {
    it('LEETCODEISHIRING 期望 LCIRETOESIIGEDHN', function () {
        expect(convert('LEETCODEISHIRING', 3)).to.equal('LCIRETOESIIGEDHN');
    });
    it('LEETCODEISHIRING 期望 LDREOEIIECIHNTSG', function () {
        expect(convert('LEETCODEISHIRING', 4)).to.equal('LDREOEIIECIHNTSG');
    });
});