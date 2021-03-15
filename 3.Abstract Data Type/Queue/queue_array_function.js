function Queue(){
    let items = []; 
    let front = 0; // on pozisyonu izel
    let rear = -1; // arka pozisyonu izle
    let count = 0;

    // Listenin sonuna eleman ekler
    this.enqueue = (value) => {
        if (count.length === 0) throw new Error("Nothing to enqueue!");

        items[++rear] = value;
        count++;
    }

    // Listenin basindan eleman cikarir.
    this.dequeue = () => {
        if (count.length === 0) throw new Error("Nothing to enqueue!");

        let current = front++;
        let temp = items[current];
        items[current] = null;
        count--;
        return temp;
    }

    this.front = () =>  {
        console.log("front : ", front);
        return items[front];
    }

    this.rear = () => {
        return items[rear];
    }

    this.isEmpty = () => {
        return count === 0;
    }

    this.size = () => {
        return count;
    }

    this.print = () => {
        let temp = items.filter((e) => e !== null);
        console.log(temp);
    }
}

let list = new Queue();
list.enqueue(12);
list.enqueue(21);
list.enqueue(44);
list.print();

list.dequeue();
list.dequeue();
list.print();