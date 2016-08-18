import assert from 'assert';
import { SinglyLinkedList } from '../../data-structures';

// Write a function that partitions a linked list around a value x, such that
// all nodes less than x come before all nodes greater than or equal to x.
// The partition element x can appear anywhere in the 'right' partition.
// Eg.
// I: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// O: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

// Trivial with addToTail method
function partition(partitionValue, sll) {
  const partitonedList = Object.create(SinglyLinkedList).init();
  for (const val of sll.values()) {
    if (val < partitionValue) {
      partitonedList.addToHead(val);
    } else {
      partitonedList.addToTail(val);
    }
  }
  return partitonedList;
}

// Cheating here because even though I'm not using the addToTail
// I'm using the tail reference to merge the two lists together
function partitionWithoutAddToTail(partitionValue, sll) {
  const lt = Object.create(SinglyLinkedList).init();
  const gte = Object.create(SinglyLinkedList).init();
  for (const val of sll.values()) {
    if (val < partitionValue) {
      lt.addToHead(val);
    } else {
      gte.addToHead(val);
    }
  }
  lt.tail.next = gte.head;
  lt.tail = gte.tail;
  return lt;
}

function isPartitioned(partition, ll) {
  let inRightPartition = false;
  let areAllGTE = true;
  for (const node of ll) {
    if (inRightPartition) {
      areAllGTE = areAllGTE && node.val >= partition;
    } else {
      if (node.val >= partition) inRightPartition = true;
    }
  }
  return areAllGTE;
}
const sll1 = Object.create(SinglyLinkedList).init(3,5,8,5,10,2,1);
const partitionedSll1 = Object.create(SinglyLinkedList).init(3,1,2,10,5,5,8);
assert(isPartitioned(5, partitionedSll1), 'should return true if the LL is partitioned');
assert(isPartitioned(5, sll1) === false, 'should return false if the LL is not partitioned');
assert(isPartitioned(5, partition(5, sll1)), 'should partition the LL around the given value');
