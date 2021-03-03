"use strict";
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirstData(data) {
    let node = new Node(data);
    this.head = node;
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (index === counter) return node;
      node = node.next;
      counter++;
    }
    return null;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return; //null
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
    }
    let prevNode = this.getAt(index - 1);
    let nextNode = new Node(data);
    nextNode.next = prevNode.next;
    prevNode.next = nextNode;
    return this.head;
  }
}

let list = new LinkedList();
list.insertFirstData(10);
list.insertAt(15, 1);
list.insertAt(5, 2);
list.insertAt(20, 3);
let getList = list.getAt(0);
console.log(JSON.stringify(list));
console.log(getList);
