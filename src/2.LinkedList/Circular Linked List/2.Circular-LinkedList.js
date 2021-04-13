/**
 * 1.oncelik this.head.prev = this.tail 
 * 2.oncelik this.tail.next = this.head
 */

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

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    //basi sona baglama
    this.head.prev = this.tail;
    //sonu basa baglama
    this.tail.next = this.head;

    this.length++;
    return this;
  }

  insert(value, index = 0) {
    const node = new Node(value);
    let current = this.head;
    
    if (index < 0 || index > this.length) return undefined;

    // basa dugum ekleme
    if (index === 0) {
      node.next = this.head;
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = current;
        current.prev = node;
        this.head = node;
      }
    }
    // sona dugum ekleme
    else if (index === this.length) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    }
    // araya dugum ekleme
    else {
      let onceki = this.indexOf(index - 1);
      let sonraki = onceki.next;
      onceki.next = node;
      node.prev = onceki;
      node.next = sonraki;
      sonraki.prev = node;
    }
    // basi sona ekliyoruz
    this.head.prev = this.tail;
    // sonu basa ekliyoruz
    this.tail.next = this.head;

    this.length++;
    return this;
  }

  remove(index = 0) {
    if (index > -1 && index < this.length) {
      let current = this.head;
      let count = 0;
      let previous;

      //Removing first item
      if (index === 0) {
        this.head = current.next;

        //if there is only one item, update tail //NEW
        if (length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (index === this.length - 1) {
        current = this.tail;
        this.tail.next = null;
        this.tail = current.prev;
      } else {
        while (count !== index) {
          previous = current;
          current = current.next;
          count++;
        }
        previous.next = current;
        current.next.prev = previous;
      }

      if (this.head) {
        this.head.prev = this.tail;
        this.tail.next = this.head;
      }

      this.length--;
      return this;
    }
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    while (current != null) {
      const { prev, next } = current;

      current.prev = next;
      current.next = prev;
      current = next;
    }
  }

  indexOf(index) {
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

  toString() {
    if (!this.length) return "";
    let str = `${this.head.value}`;
    let current = this.head;

    for (let i = 0; i < this.length - 1; i++) {
      current = current.next;
      str += `-> ${current.value}`;
    }
    console.log(str);
  }
  
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

console.log(list);
