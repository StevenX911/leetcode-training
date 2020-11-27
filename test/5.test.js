const {
    longestPalindrome,
    longestPalindrome2,
    longestPalindrome3
} = require('../src/5.js');

const {
    expect
} = require('chai');

describe('找出最长回文子串#longestPalindrome', function () {
    it('b 期望 b', function () {
        expect(longestPalindrome('b')).to.equal('b');
    });
    it('bb 期望 bb', function () {
        expect(longestPalindrome('bb')).to.equal('bb');
    });
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

describe('找出最长回文子串#longestPalindrome2', function () {
    it('b 期望 b', function () {
        expect(longestPalindrome2('b')).to.equal('b');
    });
    it('bb 期望 bb', function () {
        expect(longestPalindrome2('bb')).to.equal('bb');
    });
    it('babad 期望 bab', function () {
        expect(longestPalindrome2('babad')).to.equal('bab');
    });
    it('babadab 期望 baddab', function () {
        expect(longestPalindrome2('babadab')).to.equal('badab');
    });
    it('cbbd 期望 bb', function(){
        expect(longestPalindrome2('cbbd')).to.equal('bb');
    })
})

describe('找出最长回文子串#longestPalindrome3', function () {
    it('b 期望 b', function () {
        expect(longestPalindrome3('b')).to.equal('b');
    });
    it('bb 期望 bb', function () {
        expect(longestPalindrome3('bb')).to.equal('bb');
    });
    it('babad 期望 bab', function () {
        expect(longestPalindrome3('babad')).to.equal('bab');
    });
    it('babadab 期望 baddab', function () {
        expect(longestPalindrome3('babadab')).to.equal('badab');
    });
    it('cbbd 期望 bb', function(){
        expect(longestPalindrome3('cbbd')).to.equal('bb');
    })
})