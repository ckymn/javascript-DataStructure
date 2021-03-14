class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //listenin basina dugum ekleme
  _enqueue(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // listenin sonundan dugum cikarma
  _dequeue() {
    if (!this.head) return null;

    const temp = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    this.length--;

    return temp.value;
  }

  _toArray() {
    let arr = [];
    while (this.head) {
      arr.push(this.head.value);
      this.head = this.head.next;
    }
    return arr;
  }
}

let list = new QueueLinkedList();

list._enqueue(10);
list._enqueue(20);
list._enqueue(30);
list._enqueue(40);
list._dequeue();
console.log(list);
console.log(list._toArray());
