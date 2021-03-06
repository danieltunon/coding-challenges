import assert from 'assert';
import { compose } from 'ramda';
import { SinglyLinkedList } from '../../data-structures';

SinglyLinkedList.removeDups = function removeDups() {
  for (const node of this) {
    let prev = node;
    let next = node.next;
    while (next) {
      if (next.val === node.val) {
        if (next.next === null) {
          this.tail = prev;
        }
        prev && (prev.next = next.next);
        next.next = null;
        this.size--;
      } else {
        prev = next;
      }
      next = prev.next;
    }
  }
  return this;
};

function removeDupsSet(ll) {
  const uniqVals = new Set(ll.values());
  return Object.create(SinglyLinkedList).init(...uniqVals);
}

const ll1 = Object.create(SinglyLinkedList).init(1, 2, 3, 1, 2, 5, 2, 3, 6);
const ll2 = Object.create(SinglyLinkedList).init(1, 2, 3, 5, 6);
assert(removeDupsSet(ll1).toString() === ll2.toString(), 'Should remove duplicates from linked list with Set implementation');
assert(ll1.removeDups().toString() === ll2.toString(), 'Should remove duplicates from linked list without a buffer');
