import assert from 'assert';
import { SinglyLinkedList } from '../DataStructures';

// Number represented as LL, where each node contains single digit.
// Digits are stored in reverse order, i.e. ones at head.
// Write a function adds two numbers returns the sum as a linked list.
// Example:
// I: (7 -> 1 -> 6) + (5 -> 9 -> 2) i.e. 617 + 295
// O: (2 -> 1 -> 9) i.e. 912

//imperativey solution
function sumLists(sll1, sll2) {
  const sum = Object.create(SinglyLinkedList).init();

  let node1 = sll1.head;
  let node2 = sll2.head;
  let remainder = 0;

  while (node1 || node2 || remainder) {
    remainder += (node1 && node1.val) + (node2 && node2.val);
    sum.addToTail(remainder % 10);
    remainder = ~~(remainder / 10);
    node1 = node1 && node1.next;
    node2 = node2 && node2.next;
  }

  return sum;
}

// follow up:
// Suppose the digits are stored in forward order.
// Example:
// I: (6 -> 1 -> 7) + (2 -> 9 -> 5) i.e. 617 + 295
// O: (9 -> 1 -> 2)  i.e. 912
function sumListsForward(sll1, sll2) {
  const sum = Object.create(SinglyLinkedList).init();

  const difference = sll1.size - sll2.size;
  for (let i = 0; i < Math.abs(difference); i++) {
    difference < 0 ? sll1.addToHead(0) : sll2.addToHead(0);
  }

  let node1 = sll1.head;
  let node2 = sll2.head;
  let remainder = 0;
  while (node1 || node2 || remainder) {
    remainder *= 10;
    remainder += (node1 && node1.val) + (node2 && node2.val);
    if (sum.head != null || ~~(remainder / 10)) {
      sum.addToTail(~~(remainder / 10));
    }
    remainder %= 10;
    node1 = node1 && node1.next;
    node2 = node2 && node2.next;
  }

  return sum;
}

const n617 = Object.create(SinglyLinkedList).init(7, 1, 6);
const n295 = Object.create(SinglyLinkedList).init(5, 9, 2);
const n912 = Object.create(SinglyLinkedList).init(2, 1, 9);
assert.deepEqual([...sumLists(n617, n295).values()], [...n912.values()], 'should sum two linked lists of the same length');
const n1417 = Object.create(SinglyLinkedList).init(7, 1, 4, 1);
const n95 = Object.create(SinglyLinkedList).init(5, 9);
const n1512 = Object.create(SinglyLinkedList).init(2, 1, 5, 1);
assert.deepEqual([...sumLists(n1417, n95).values()], [...n1512.values()], 'should handle linked lists of different lengths');
const n6439 = Object.create(SinglyLinkedList).init(9, 3, 4, 6);
const n7825 = Object.create(SinglyLinkedList).init(5, 2, 8, 7);
const n14264 = Object.create(SinglyLinkedList).init(4, 6, 2, 4, 1);
assert.deepEqual([...sumLists(n6439, n7825).values()], [...n14264.values()], 'should handle cases where the first digits carry over to the next place');
const N617 = Object.create(SinglyLinkedList).init(6, 1, 7);
const N295 = Object.create(SinglyLinkedList).init(2, 9, 5);
const N912 = Object.create(SinglyLinkedList).init(9, 1, 2);
assert.deepEqual([...sumListsForward(N617, N295).values()], [...N912.values()], 'should sum two linked lists of the same length');
const N1417 = Object.create(SinglyLinkedList).init(1, 4, 1, 7);
const N95 = Object.create(SinglyLinkedList).init(9, 5);
const N1512 = Object.create(SinglyLinkedList).init(1, 5, 1, 2);
assert.deepEqual([...sumListsForward(N1417, N95).values()], [...N1512.values()], 'should handle linked lists of different lengths');
const N6439 = Object.create(SinglyLinkedList).init(6, 4, 3, 9);
const N7825 = Object.create(SinglyLinkedList).init(7, 8, 2, 5);
const N14264 = Object.create(SinglyLinkedList).init(1, 4, 2, 6, 4);
assert.deepEqual([...sumListsForward(N6439, N7825).values()], [...N14264.values()], 'should handle cases where the first digits carry over to the next place');
