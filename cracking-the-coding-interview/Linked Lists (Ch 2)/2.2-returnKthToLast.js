import assert from 'assert';
import { SinglyLinkedList } from '../DataStructures';

// Trivial solution using size property
function returnKthToLast1(k, sll) {
  let size = sll.size;
  for (let val of sll.values()) {
    if (size === k) {
      return val;
    }
    size--;
  }
  return null;
}

// Using a lagging pointer
function returnKthToLast2(k, sll) {
  let i = 1;
  let leading = sll.head;
  let lagging = sll.head;
  while (leading.next !== null) {
    if (i >= k) {
      lagging = lagging.next;
    }
    leading = leading.next;
    i++;
  }
  return lagging.val;
}

// Using recursion... kinda wierd... lol
function returnKthToLast3(k, sll) {
  if (sll.head !== undefined) {
    return returnKthToLast3(k, sll.head).val;
  } else if (sll.next === null) {
    return k === 1 ? sll : 2;
  }
  const result = returnKthToLast3(k, sll.next)
  if (typeof result === 'number') {
    return result === k ? sll : result + 1;
  }
  return result;
}

const sll = Object.create(SinglyLinkedList).init(1, 2, 3, 4, 5, 6);
assert(returnKthToLast1(3, sll) === 4, 'should return the Kth to last item in the SLL');
assert(returnKthToLast2(3, sll) === 4, 'should return the Kth to last item');
assert(returnKthToLast2(1, sll) === 6, 'should return the Kth to last item, Kth is last');
assert(returnKthToLast2(6, sll) === 1, 'should return the Kth to last item, Kth is first');
assert(returnKthToLast3(3, sll) === 4, 'should return the Kth to last item');
assert(returnKthToLast3(1, sll) === 6, 'should return the Kth to last item, Kth is last');
assert(returnKthToLast3(6, sll) === 1, 'should return the Kth to last item, Kth is first');
