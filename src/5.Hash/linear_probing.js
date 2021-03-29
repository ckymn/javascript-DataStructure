// Linear Porbing

class HashTable {
    constructor(size = 100) {
      this.size = new Array(size);
      this.values = {};
      this.length = 0;
    }

    hash(key){
      return key.toString().length  % this.size.length;
    }

    add(key,value){
      let index = this.hash(key);
      if(!this.values.hasOwnProperty(index))
        this.values[index] = [];
      if(!this.values[index].hasOwnProperty(key))
        this.length++;
      this.values[index][key] = value;

    }

    search(key){
      let index = this.hash(key);
      if(this.values.hasOwnProperty(index) && this.values[index].hasOwnProperty(key))
        return this.values[index][key];
      return null;
    }

    remove(key) {
      let item = this.hash(key);
      return this.values[item] = undefined;
   }
    
    size(){
      return this.length;
    }

    isEmpty() {
      for( let i=0, len = this.length; i < len; i++) {
       if( this.values[i] ) { 
         return false 
        };
      }
      return true
    }
}


 
const ht = new HashTable();
ht.add("Canada","300");
ht.add("Germany","100");
ht.add("Italy","50");
ht.add("Ahmoo","150");

console.log(ht);



