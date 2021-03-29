// SEPERATE CHAINING

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class HashTable {
    constructor(size = 100) {
      this.table = new Array(size);
      this.length = 0;
    }

    // hash table index degeri bulma
    hash(key){
      return key.toString().length  % this.size.length;
    }

    add(item){
      // yeni index degeri verir
      let index = this.hash(item);

      // node degeri olusturmak
      let node = new Node(item);

      // eger deger varsa node ile bir sonraki (next) degerine deger atiyoruz
      if(this.table[index])
        node.next = this.table[index]
      
      //eger deger yoksa n
      this.table[index] = node;
    }

    search(item){
      for (let i = 0; i < this.table.length; i++) {
        if(this.table[i]){
          let current = this.table[i];
          while(current){
            if(current.data === item)
              return true;
          }
          current = current.next;
        }
      }
      return false;
    }

    remove(item) {
      let index = this.hash(item);
      if(this.table[index]){
        if(this.table[index].data === item){
          this.table[key] = this.table[key].next;
        }
        else{
          let current = this.table[key].next;
          let prev = this.table[key];
          while(current){
            if(current.data === item)
              prev.next = current.next;
            prev = current;
            current = current.next;
          }
        }
      }
      return false;
   }
   
   size(){
     let counter  = 0;
     for(let i = 0; i < this.table.length; i++){
       if(this.table[i]){
         let current = this.table[i];
         while(current){
           counter++;
           current = current.next;
         }
       }
     }
     return counter;
    }
    
    isEmpty() {
      return this.size() < 1 ? true : false;
    }

    
}

 
const ht = new HashTable();
ht.add("Canada");
ht.add("Germany");
ht.add("Italy");
ht.add("Ahmoo");

console.log(ht.search("Canada"));
console.log(ht);
