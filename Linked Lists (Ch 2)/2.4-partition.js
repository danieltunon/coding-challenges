import assert from 'assert';
import { SinglyLinkedList } from '../DataStructures';

// Write a function that partitions a linked list around a value x, such that
// all nodes less than x come before all nodes greater than or equal to x.
// The partition element x can appear anywhere in the 'right' partition.
// Eg.
// I: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// O: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

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
