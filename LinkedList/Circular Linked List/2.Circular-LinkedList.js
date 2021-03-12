class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    let current = this.head;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.get(this.length - 1);
      current.next = node;
    }
    node.next = this.head; //circular basa baglaniyor.

    this.length++;
    return this;
  }

  insert(value, index=0) {
    if (index < 0 || index > this.length) return undefined;

    const node = new Node(value);

    if (index === 0) {
      node.next = this.head;

      // basa dugum ekleme
      if (this.length === 0) {
        node.next = node;
      } else {
        const last = this.get(this.length - 1);
        last.next = node;
      }
      this.head = node;
    }
    // aray dugum ekleme
    else {
      const previous = this.get(index);
      node.next = previous.next;
      previous.next = node;
    }

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    let removed = this.head;

    // bastan deger sil
    if (index === 0) {
      if (this.length === 1) {
        this.head = null;
      } else {
        const last = this.get(this.length - 1);
        this.head = this.head.next;
        last.next = this.head; // dikkat!
      }
    }
    else {
      let previous = this.get(index -1);
      removed = previous.next;
      previous.next = removed.next;
    }

    this.length--;
    return removed;
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    while (current != null) {
      const { prev, next } = current; // null , null

      current.prev = next;
      current.next = prev;
      current = next;
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  size() {
    let counter = 0;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      counter++;
      current = current.next;
    }
    return counter;
  }
  // Listenin value degerlerini string halde gosterir
  toString() {
    if (!this.length) return "";
    let str = `${this.head.value}`;
    let current = this.head;

    for (let i = 0; i < this.length - 1; i++) {
      current = current.next;
      str += `-> ${current.value}`;
    }
    return str;
  }
  // Listeyi gosterir.
  print() {
    let arr = [];
    if (this.length) {
      let current = this.head;

      for (let i = 0; i < this.length; i++) {
        arr.push(current);
        current = current.next;
      }
    }
    console.log(arr);
  }
}

let list = new CircularLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.insert(0, 0);
list.insert(100, list.size()-1);

list.remove(0);

list.print();
