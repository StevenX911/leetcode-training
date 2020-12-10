const {
    myAtoi
} = require('../src/8.js');

const {
    expect
} = require('chai');

describe("字符串转换整数", function(){
    it('"42" 期望 42', function(){
        expect(myAtoi('42')).to.equal(42);
    });

    it('"   -42" 期望 -42', function(){
        expect(myAtoi('  -42')).to.equal(-42);
    });

    it('"4193 with words" 期望 4193', function(){
        expect(myAtoi('4193 with words')).to.equal(4193);
    });

    it('"words and 987" 期望 0', function(){
        expect(myAtoi('words and 987')).to.equal(0);
    });

    it('"-91283472332" 期望 -(2 ** 31)', function(){
        expect(myAtoi('-91283472332')).to.equal(-2147483648);
    });
    it('"91283472332" 期望 (2 ** 31 - 1)', function(){
        expect(myAtoi('91283472332')).to.equal(2147483647);
    });
});