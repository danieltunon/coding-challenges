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

const n617 = Object.create(SinglyLinkedList).init(7, 1, 6);
const n295 = Object.create(SinglyLinkedList).init(5, 9, 2);
const n912 = Object.create(SinglyLinkedList).init(2, 1, 9);
assert.deepEqual([...sumLists(n617, n295).values()], [...n912.values()], 'should return the correct sum');
const n1417 = Object.create(SinglyLinkedList).init(7, 1, 4, 1);
const n95 = Object.create(SinglyLinkedList).init(5, 9);
const n1512 = Object.create(SinglyLinkedList).init(2, 1, 5, 1);
assert.deepEqual([...sumLists(n1417, n95).values()], [...n1512.values()], 'should return the correct sum');
const n6439 = Object.create(SinglyLinkedList).init(9, 3, 4, 6);
const n7825 = Object.create(SinglyLinkedList).init(5, 2, 8, 7);
const n14264 = Object.create(SinglyLinkedList).init(4, 6, 2, 4, 1);
assert.deepEqual([...sumLists(n6439, n7825).values()], [...n14264.values()], 'should return the correct sum');
