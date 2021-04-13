/**
 * Burda kural node ozelliklerinde next ve prev olmasi
 * this.head.prev = null
 * this.tail.next = null
 */
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

  // sona ekleme
  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.tail;
      this.tail.next = node;
      node.prev = current;
      node.next = null;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  // basa ekleme
  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      node.next = current;
      node.prev = null;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
    return this;
  }

  // sondan eleman silme
  pop(){
    let removed = this.tail;
    if(!this.tail) return undefined;

    if(this.length === 1){
      this.head = null
      this.tail = null;
    }

    this.tail = removed.prev;
    this.tail.next = null;

    this.length--;
    return this;
  }
  
  // bastan eleman silem
  shift(){
    let removed = this.head;
    if(!this.head) return undefined;

    this.head = this.head.next;
    this.head.prev = null;

    this.length--;
    return this;
  }

  // index degirini bulma
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

  // araya ekleme
  insert(value, index) {
    const node = new Node(value);
    
    if (index < 0 || index > this.length) return undefined;
    
    // basa dugum ekleme
    if (index === 0) this.unshift(value);
    
    // sona dugum ekleme
    else if (index === this.length) this.push(value);
    
    // araya dugum ekleme
    else {
      let getNode = this.indexOf(index -1),
      temp = getNode.next;  

      getNode.next = node;
      node.next = temp;
      temp.prev = node;
      node.prev = getNode;
    }

    this.length++;
    return this;
  }

  // silme
  remove(index) {
    if (index < 0 || index >= this.length) return null;

    // bastan deger sil
    if (index === 0) return this.shift();

    // sondan deger sil
    if (index === this.length) return this.pop();
    
    // ortadan deger sil
    else {
      let getremoved = this.indexOf(index -1),
      temp = getremoved.next.next;
      
      getremoved.next = temp;
      temp.prev = getremoved;
    }

    this.length--;
    return this;
  }

  // degistirme
  reverse() {
    if (!this.head) return undefined;

    // bas ve tail kismini degistiriyoruz
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    while (current != null) {
      // let {prev, next} = current
      current.prev = current.next;
      current.next = current.prev;
      current = current.next;
    }
  }

  // boyutunu bulma
  size() {
    let counter = 0;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  // LinkedList show with string
  toString() {
    if (!this.length) return "";

    let str = `${this.head.value}`;
    let current = this.head;

    while (current) {
      current = current.next;
      str += `-> ${current.value}`;
    }
    return str;
  }

  // LinkedList show with array
  print() {
    let arr = [];
    if (this.length) {
      let current = this.head;

      for (let i = 0; i < this.length; i++) {
        arr.push(current);
        current = current.next;
      }
    }
    // console.log(arr);
  }
}

let list = new DoubleLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.unshift(2);
list.insert(65,1);

console.log(list);
