const {
    findMedianSortedArrays
} = require('../src/4.js');

const {
    expect
} = require('chai');

describe('寻找两个正序数组的中位数', function () {
    it('nums1 = [1,3], nums2 = [2] 期望 2', function () {
        expect(findMedianSortedArrays([1, 3], [2])).to.equal(2);
    });
    it('nums1 = [1,2], nums2 = [3,4] 期望 2.5', function(){
        expect(findMedianSortedArrays([1,2], [3,4])).to.equal(2.5);
    })
    it('nums1 = [0,0], nums2 = [0,0] 期望 0', function(){
        expect(findMedianSortedArrays([0,0], [0,0])).to.equal(0);
    });
    it('nums1 = [], nums2 = [1] 期望 1', function(){
        expect(findMedianSortedArrays([], [1])).to.equal(1);
    });
    it('nums1 = [2], nums2 = [] 期望 2', function(){
        expect(findMedianSortedArrays([2], [])).to.equal(2);
    })
})