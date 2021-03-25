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

  // Listenin sonuna dugum ekleme 
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

  // listenin basindan dugum cikarma
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

  // Ilk elemani donmek
  _front = () => {
    if(this.head)
      return this.head.value;
    
    return null;
  }

  // Son Elemani donmek
  _rear = () => {
    let current = this.head;

    if(current === null)
      return null;

    while(current.next){
      current = current.next;
    }

    return current.value;
  }

  _toArray = () => {
    let arr = [];
    while (this.head) {
      arr.push(this.head.value);
      this.head = this.head.next;
    }
    return arr;
  }

  _isEmpty = () => {
    return this.length === 0;
  }

  _size = () => {
    return this.length;
  }

  _clear = () => {
    this.head = null;
    this.length = 0;
  }
}

let list = new QueueLinkedList();

list._enqueue(10);
list._enqueue(20);
list._enqueue(30);
list._enqueue(40);
list._dequeue();

console.log(list);
