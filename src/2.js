/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * 利用链表实现两数相加
 * 时间复杂度 O(m,n)
 * 空间复杂度 O(m,n)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // head: 新链表头
    // tail: 后一位，比如10位、100位等
    // 链表是逆序存储，表头存储最小位，表尾存储最大位
    let head = null,
        tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        // 计算进位
        carry = Math.floor(sum / 10);
        // 链表向前移位
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    // l1和l2表位相加出现进位
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    // 返回新链表的表头
    return head;
};

module.exports = {
    addTwoNumbers,
    ListNode
};
