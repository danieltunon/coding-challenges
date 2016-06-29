const singlyLinkedList = {
  addToHead(val) {
    const node = { val, next: this.head };
    this.head = node;
    return this;
  },
  addToTail(val) {
    const node = { val, next: null };
    if (this.tail) {
      this.tail.next = node;
      this.tail = this.tail.next;
    } else {
      this.head = node;
      this.tail = node;
    }
    return this;
  },
  contains(val) {
    for (const node of this) {
      if (node.val === val) {
        return true;
      }
    }
    return false;
  },
  remove(val) {
    let prev = null;
    for (const node of this) {
      if (node.val === val) {
        if (prev === null) {
          this.head = node.next;
        } else {
          prev.next = node.next;
        }
        node.next = null;
        return true;
      }
      prev = node;
    }
  },
  [Symbol.iterator]: function() {
    let node = this.head;
    let isFirst = true;
    return {
      next: () => {
        if (isFirst) {
          isFirst = false;
          return { value: node };
        } else if (node.next === null) {
          return { done: true };
        }
        node = node.next;
        return { value: node };
      },
      return() {
        isFirst = true;
        return { done: true };
      },
    };
  },
  toString() {
    const nodes = ['HEAD '];
    if (this.head === null) {
      nodes.push('--> [ null ] <-- TAIL');
      return nodes.join('');
    }
    for (const node of this) {
      nodes.push(`--> [ ${node.val} | ${node.next ? '\u2022' : 'null '}]`)
    }
    nodes.push(' <-- TAIL');
    return nodes.join('');
  },
};

function SinglyLinkedList(...vals) {
  const list = Object.create(singlyLinkedList);
  list.head = null;
  list.tail = null;
  for (const val of vals) {
    list.addToTail(val);
  }
  return list;
}

const poo = SinglyLinkedList(1, 2, 3, 4);
console.log(poo.toString());
// console.log()

// const poo = Object.create(SinglyLinkedList);
// poo.head = { val: 0, next: null };
// poo.addToHead(1).addToHead(2).addToHead(3);

// console.log(poo.contains(2))
// console.log(poo.contains(7))
// poo.remove(2)
// console.log(poo)

// const itr = poo[Symbol.iterator]();
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.return());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log([...poo]);
// for (var tit of poo) {
//   console.log(tit)
// }
//
// for (var tit of poo) {
//   console.log(tit)
// }
