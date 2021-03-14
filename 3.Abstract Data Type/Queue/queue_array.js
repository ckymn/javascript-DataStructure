class Queue{
  constructor() {
    this.items = [];
  }

  // listeinin sounun eleman ekler.
  _enqueue(value) {
    this.items.push(value);
  }

  // listenin basindan bir eleman kaldirir.
  _dequeue() {
    if (this.length === 0) throw new Error("Nothing to queue!");
    this.items.shift();
  }

  //Kuyruktaki ilk öğeyi döndür
  _front() {
    if (this.length === 0) throw new Error("Stack is Empty!");
    return this.items[0];
  }
  
  // Kuyruktaki son öğeyi döndür
  _rear() {
    if (this.length === 0) throw new Error("Stack is Empty!");
    return this.items[this.items.length - 1];
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

  _print() {
      console.log(this.items.toString());
  }
}


let list = new Queue();

list._enqueue(10);
list._enqueue(20);
list._enqueue(30);

console.log(list);
list._print();

