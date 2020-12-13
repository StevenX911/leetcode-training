const {
    isPalindrome
} = require('../src/9');

const {
    expect
} = require('chai');

describe("回文数判断", function(){
    it("121 期望 true", function(){
        expect(isPalindrome(121)).to.equal(true);
    });
    it("-121 期望 false", function(){
        expect(isPalindrome(-121)).to.equal(false);
    });
    it("5 期望 true", function(){
        expect(isPalindrome(5)).to.equal(true);
    });
    it("1001 期望 true", function(){
        expect(isPalindrome(1001)).to.equal(true);
    })
})