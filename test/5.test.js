const {
    longestPalindrome
} = require('../src/5.js');

const {
    expect
} = require('chai');

describe('找出最长回文子串', function () {
    it('babad 期望 bab', function () {
        expect(longestPalindrome('babad')).to.equal('bab');
    });
    it('babadab 期望 baddab', function () {
        expect(longestPalindrome('babadab')).to.equal('badab');
    });
    it('cbbd 期望 bb', function(){
        expect(longestPalindrome('cbbd')).to.equal('bb');
    })
})