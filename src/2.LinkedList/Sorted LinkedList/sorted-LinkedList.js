class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class SortedLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value){
    let node = new Node();
    node.value = value;
    // hic eleman yokken
    if(this.head === null){
      this.head = node;
      this.tail = node;
      this.length = 1;
      return node;
    }
    // tek eleman varken
    if(this.tail === null){
      this.tail = node;
      this.tail.prev = this.head;
      this.head.next = this.tail;
      this.length = 2;
      return node;
    }
    // cok eleman varken 
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return node;
  }

  pop(){
    if(this.head === null) return null;
    if(this.head === this.tail){
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }

    let oldtail = this.tail;
    let newtail = this.tail.prev;

    newtail.next = null;
    this.tail = newtail;
    this.length--;
    return oldtail;
  }

  unshift(){
    if(this.head === null) return null;
    if(this.head === this.tail){
      let temp = this.head;
      this.head = null;
      this.tail = null
      this.length = 0;
      return temp;
    }

    let oldhead = this.head;
    this.head = this.head.next;
    this.length--;
    return oldhead;
  }

  print(){
    if(this.head == 0) return "empty list...";
    let s = "";
    while(this.head != null){
      s += `${this.head.value} -> `;
      this.head = this.head.next;
    }
    return s;
  } 
}

function merge_sort(list){
  if(list.length <= 1) return list;

  let mid = list.length/2;
  let left = new SortedLinkedList();
  let right = new SortedLinkedList();

  let index = 1;
  let node = list.head;

  while(node != null){
    if(index <= mid){
      left.push(node.value);
    }
    else{
      right.push(node.value);
    }
    index++;
    node = node.next;
  }
  // RECURSIVE CALL
  left = merge_sort(left);
  right = merge_sort(right);

  return merge(left,right);

  function merge(left, right){
    let result = new SortedLinkedList();
    while((left.length > 0) && (right.length > 0)){
      if(left.head.value <= right.head.vlaue){
        result.push(left.unshift().value);
      }
      else{
        result.push(right.unshift().value);
      }
    }
    while(left.length > 0){
      result.push(left.unshift().value);
    }
    while(right.length > 0){
      result.push(right.unshift().value);
    }
    return result;
  }
}


let list = new SortedLinkedList();
list.push(1);
list.push(200);
list.push(40);
list.push(34);

console.log(list.print());
merge_sort(list);
console.log(list.print());