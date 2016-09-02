/**
* Definition for singly-linked list.
*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
  const sum = new ListNode((l1.val + l2.val) % 10)
  let currentNode = sum;
  let carry = Math.floor((l1.val + l2.val) / 10);
  let a = l1.next;
  let b = l2.next;

  while (a || b || carry) {
    let currentDigit = (a && a.val) + (b && b.val) + carry;
    currentNode.next = new ListNode(currentDigit % 10);
    currentNode = currentNode.next;
    carry = Math.floor(currentDigit / 10);
    a = a && a.next;
    b = b && b.next;
  }

  return sum;
};

var l1 = new ListNode(2)
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

addTwoNumbers(l1, l2)
