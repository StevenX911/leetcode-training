const {
    addTwoNumbers,
    ListNode
} = require('../src/2.js');

const {
    expect
} = require('chai');

describe("两数相加测试用例", function () {
    it('(2 -> 4 -> 3) + (5 -> 6 -> 4) 期望返回 7 -> 0 -> 8', function () {
        const l1 = new ListNode(3, new ListNode(4, new ListNode(2)));
        const l2 = new ListNode(4, new ListNode(6, new ListNode(5)));
        expect(addTwoNumbers(l1, l2)).to.deep.equal(new ListNode(7, new ListNode(0, new ListNode(8))));
    });
});