class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class StackLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // budaki _push unshift gibi davranir.
  _push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode; 
      this.head.next = temp; // head surekli basa aliniyor.
    }
    return ++this.length;
  }

  _pop() {
    if (!this.head) throw new Error("Nothing to pop!");
    let temp = this.head;
    if (this.head === this.tail) 
        this.tail = null;
    this.head = this.head.next; // deger null'a esitleniyor.
    this.length--;
    return temp.value;
  }

  _peeks() {
    if (this.length === 0) throw new Error("Stack is Empty!");
    return this[this.length - 1];
  }

  _isEmpty() {
    return this.length === 0;
  }

  _clear() {
    this.length = 0;
  }

  _size() {
    return this.length;
  }
}

const list = new Stack(1, 2, 3);
list._push(100);
list._push(200);

console.log(list);
console.log(list._peeks());
console.log(list._size());
console.log(list._isEmpty());
