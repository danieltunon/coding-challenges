const SinglyLinkedList = {
  init(...vals) {
    Object.defineProperty(this, 'head', { value: null, writable: true });
    Object.defineProperty(this, 'tail', { value: null, writable: true });
    Object.defineProperty(this, 'size', { value: 0, writable: true });
    for (const val of vals) {
      this.addToTail(val);
    }
    return this;
  },
  addToHead(val) {
    this.head = { val, next: this.head };
    if (!this.tail) this.tail = this.head;
    this.size++;
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
    this.size++;
    return this;
  },
  contains(val) {
    for (const node of this) {
      if (node.val === val) return true;
    }
    return false;
  },
  remove(val) {
    let prev = null;
    for (const node of this) {
      if (node.val === val) {
        if (prev === null) {
          this.head = node.next;
        } else if (node.next === null) {
          this.tail = prev;
        }
        prev && (prev.next = node.next);
        node.next = null;
        this.size--;
        return node.val;
      }
      prev = node;
    }
    return null;
  },
  removeNode(node) {
    let prev = null;
    let curr = this.head;
    while (curr !== null) {
      if (curr === node) {
        if (prev === null) {
          this.head = curr.next;
        }
        if (curr.next === null) {
          this.tail = prev;
        }
        prev && (prev.next = node.next);
        node.next = null;
        this.size--;
        return this;
      }
      prev = curr;
      curr = curr.next;
    }
    return null;
  },
  values() {
    const iterable = this[Symbol.iterator]();
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        const next = iterable.next();
        return next.done ? { done: true } : { value: next.value.val };
      },
    };
  },
  map(transform) {
    const mapped = Object.create(SinglyLinkedList).init();
    for (const node of this) {
      mapped.addToTail(transform(node.val));
    }
    return mapped;
  },
  [Symbol.iterator]() {
    let node = this.head;
    return {
      next() {
        if (node === null) return { done: true };
        const value = { value: node };
        node = node.next;
        return value;
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
    for (const node of this) {
      nodes.push(`--> [ ${node.val} | ${node.next ? '\u2022' : 'null '}]`);
    }
    nodes.push(' <-- TAIL');
    return nodes.join('');
  },
  valueOf() {
    return this.toString();
  },
  [Symbol.toPrimitive](type) {
    if (type === 'string') {
      return this.toString();
    } else if (type === 'number') {
      return 0;
    }
    return 0;
  },
  [Symbol.toStringTag]: 'SinglyLinkedList',
};

export default SinglyLinkedList;
