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

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } 
    else {
      let current = this.tail;
      this.tail.next = node;
      node.prev = current;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return undefined;

    const node = new Node(value);
    let current = this.head;

    // basa dugum ekleme
    if (index === 0) {
      if(!this.head){
        this.head = node;
        this.tail = node;
      }
      else{
        node.next = current;
        this.head.prev = node;
        this.head = node;
      }
    }
    // sona dugum ekleme
    else if (index === this.length) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node; // yeni tail degeri
    }
    // araya dugum ekleme
    else {
      current = this.indexOf(index);
      let prev = current.prev;

      prev.next = node;
      node.prev = prev;
      node.next = current;
      current.prev = node;
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
        if(this.length === 1){
            this.tail = null;
        }
        else{
            this.head.prev = null;
        }
    }
    // sondan deger sil
    else if(index === this.length -1){
        removed = this.tail;
        this.tail = removed.prev;
        this.tail.next = null;
    }
    // ortadan deger sil
    else{
        removed = this.indexOf(index);
        const previous = removed.prev;
        const next = removed.next;

        previous.next = next;
        next.prev = previous;
    }

    this.length--;
    return removed.value;
  }

  reverse(){
    if(!this.head) return undefined;

    // bas ve tail kismini degistiriyoruz
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    while(current != null){
        // let {prev, next} = current
        current.prev = current.next;
        current.next = current.prev;
        current = current.next;
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

  // Listenin value degerlerini string halde gosterir
  toString() {
    if (!this.length) return "";

    let str = `${this.head.value}`;
    let current = this.head;
    console.log(current.value);
    while (current) {
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
list.reverse();
console.log(list.toString());

