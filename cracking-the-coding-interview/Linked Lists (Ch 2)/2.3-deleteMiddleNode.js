import assert from 'assert';
import { SinglyLinkedList } from '../DataStructures';

function deleteMiddleNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

const before = Object.create(SinglyLinkedList).init(1, 2, 3, 4, 5, 6);
const node4 = before.head.next.next.next;
deleteMiddleNode(node4);
const after = before.toString();
const expectedResult = Object.create(SinglyLinkedList).init(1, 2, 3, 5, 6).toString();
assert(after === expectedResult,
  'should remove a node from the middle of a SLL given only a reference to the node');
