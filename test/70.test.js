const {
    climbStairs,
    climbStairs2
} = require('../src/70.js');

const {
    expect
} = require('chai');

describe("爬楼梯", function(){
    it('n=0 期望 0', function(){
        expect(climbStairs(0)).to.equal(0);
    });
    it('n=1 期望 1', function(){
        expect(climbStairs(1)).to.equal(1);
    });
    it('n=2 期望 2', function(){
        expect(climbStairs(2)).to.equal(2);
    });
    it('n=3 期望 3', function(){
        expect(climbStairs(3)).to.equal(3);
    });
    it('n=4 期望 5', function(){
        expect(climbStairs(4)).to.equal(5);
    });
    it('n=10 期望 89', function(){
        expect(climbStairs(10)).to.equal(89);
    });
});

describe("爬楼梯2", function(){
    it('n=0 期望 0', function(){
        expect(climbStairs2(0)).to.equal(0);
    });
    it('n=1 期望 1', function(){
        expect(climbStairs2(1)).to.equal(1);
    });
    it('n=2 期望 2', function(){
        expect(climbStairs2(2)).to.equal(2);
    });
    it('n=3 期望 3', function(){
        expect(climbStairs2(3)).to.equal(3);
    });
    it('n=4 期望 5', function(){
        expect(climbStairs2(4)).to.equal(5);
    });
    it('n=10 期望 89', function(){
        expect(climbStairs2(10)).to.equal(89);
    });
});