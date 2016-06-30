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
      next() {
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
