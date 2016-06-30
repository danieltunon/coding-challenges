const singlyLinkedList = {
  init(...vals) {
    this.head = null;
    this.tail = null;
    for (const val of vals) {
      this.addToTail(val);
    }
    return this;
  },
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
        if (node.next === null) {
          this.tail = prev;
        }
        node.next = null;
        return node.val;
      }
      prev = node;
    }
  },
  [Symbol.iterator]: function() {
    let node = this.head;
    return {
      next() {
        if (node === null) return { done: true };
        const value = node.val;
        node = node.next;
        return { value };
      },
      return() {
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
    for (const val of this) {
      nodes.push(`--> [ ${val} | ${val === null ? '\u2022' : 'null '}]`)
    }
    nodes.push(' <-- TAIL');
    return nodes.join('');
  },
  valueOf() {
    return this.toString();
  },
  // [Symbol.toPrimitive]: function(type) {
  //   if (type === 'string') {
  //     return this.toString();
  //   } else {
  //     return this.toString();
  //   }
  // },
  [Symbol.toStringTag]: 'SinglyLinkedList',
};


const poo = Object.create(singlyLinkedList).init(1, 2, 3, 4);
const poo2 = Object.create(singlyLinkedList).init(...[1, 2, 3, 4]);
// poo.remove(4);
// for(const node of poo) {
//   console.log(node);
// }
console.log(poo2.toString())
// poo.remove(1);
// console.log(poo.toString());
// poo.remove(4);
// console.log(poo.toString())
// console.log(poo.tail)
