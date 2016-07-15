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

}

const n617 = Object.create(SinglyLinkedList).init(7, 1, 6);
const n295 = Object.create(SinglyLinkedList).init(5, 9, 2);
const n912 = Object.create(SinglyLinkedList).init(2, 1, 9);

assert.deepEqual([...sumLists(n617, n295).values()], [...n912.values()], 'should return the correct sum')
