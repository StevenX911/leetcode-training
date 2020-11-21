const {
    lengthOfLongestSubstring
} = require('../src/3.js');

const {
    expect
} = require('chai');

describe("无重复字符的最长子串-测试用例", function () {
    it('abcabcbb 期望返回 3', function () {
        expect(lengthOfLongestSubstring('abcabcbb')).to.equal(3);
    });
    it('bbbbb 期望返回 1', function () {
        expect(lengthOfLongestSubstring('bbbbb')).to.equal(1);
    });
    it('pwwkew 期望返回 3', function () {
        expect(lengthOfLongestSubstring('pwwkew')).to.equal(3);
    });
});