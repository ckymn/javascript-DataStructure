class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
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
      this.tail = node;
    } else {
      // burda tail degerini bozmamak icin get ile son elemani cagiralim
      current = this.get(this.length - 1);
      current.next = node;
      node.prev = current;
    }
    this.tail = node;

    this.length++;
    return this;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return undefined;

    const node = new Node(value);

    if (index === 0) {
      // basa dugum ekleme
      if (this.head) {
        node.next = this.head;
        this.head.prev = node;
      } else {
        this.tail = node;
      }
      this.head = node;
    }
    // sona dugum ekleme
    else if (index === this.size()) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node; // yeni tail degeri
    }
    // aray dugum ekleme
    else {
      const current = this.get(index);
      let prev = current.prev;

      prev.next = node;
      current.prev = node;
      node.prev = prev;
      node.next = current;
    }

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;

    let removed = this.head;
    // bastan deger sil
    if(index === 0){
        this.head = removed.next;
        if(this.size() === 1){
            this.tail = null;
        }
        else{
            this.head.prev = null;
        }
    }
    // sondan deger sil
    else if(index === this.size() -1){
        removed = this.tail;
        this.tail = removed.prev;
        this.tail.next = null;
    }
    // ortadan deger sil
    else{
        removed = this.get(index);
        const previous = removed.prev;
        const next = removed.next;

        previous.next = next;
        next.prev = previous;
    }

    this.length--;
    return removed.value;
  }

  reverse(){
      let current = this.head;
      this.head = this.tail;
      this.tail = current;

      while(current != null){
          const {prev, next} = current // null , null

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

let list = new DoubleLinkedList();
list.push(10);
list.push(20);
list.push(30);

// list.insert(100, list.size());

// list.remove(3);

// console.log(list.toString());
// list.reverse();
// console.log(list.toString());
console.log(list.size());

list.print();
