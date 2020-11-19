const twoSum = require('../src/1.js');
const expect = require('chai').expect;

describe("两数之和测试用例", function () {
    it('[2, 7, 11, 15], 9 期望返回 [0, 1]', function () {
        expect(twoSum([2, 7, 11, 15], 9)).to.have.ordered.members([0, 1]);
    });
    it('[6, 3, 8, 2, 1], 8 期望返回 [0, 3]', function(){
        expect(twoSum([6, 3, 8, 2, 1], 8)).to.have.ordered.members([0, 3]);
    })
    it('[0, 1, 0, 2], 2 期望返回 [0, 3]', function(){
        expect(twoSum([0, 1, 0, 2], 2)).to.have.ordered.members([0, 3]);
    });
    it('[3, 2, 4], 6 期望返回 [1, 2]', function(){
        expect(twoSum([3, 2, 4], 6)).to.have.ordered.members([1, 2]);
    });
    it('[3, 3], 6 期望返回 [0, 1]', function(){
        expect(twoSum([3, 3], 6)).to.have.ordered.members([0, 1]);
    });
})