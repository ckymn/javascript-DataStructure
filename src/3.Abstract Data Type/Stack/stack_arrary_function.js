function Stack(){
    let items =  [];
    let top = 0;

    // Listenin basina eleman ekleme
    this.push = (value) =>{
        if (top.length === 0) throw new Error("Nothing to push!")
       
        items[top++] = value;
    }

    // Listenin basindan eleman cikarma
    this.pop = () =>{
        if (top.length === 0) throw new Error("Nothing to push!")

        return items[--top];
    }

    // Listenin eklenmis son elemani doner
    this.peek = () => {
        return items[top - 1];
    }

    this.isEmpty = () => {
        return top === 0;
    }

    this.clear = () => {
        top = 0;
    }

    this.size = () =>{ 
        return top;
    }

    this.print = () => {
        let temp = items.filter((e) => e !== null);
        console.log(temp);
    }
}

let list = new Stack();
list.push(12);
list.push(21);
list.push(44);
list.print();

list.pop();
list.print();
