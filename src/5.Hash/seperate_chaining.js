// SEPERATE CHAINING

class HashTable {
    constructor(size = 100) {
      this.size = new Array(size);
      this.values = {};
      this.length = 0;
    }

    // hash table index degeri bulma
    hash(key){
      return key.toString().length  % this.size.length;
    }

    add(key,value){
      // yeni index degeri verir
      let index = this.hash(key);
      // index degerinde value yoksa obje olarak ata
      if(!this.values.hasOwnProperty(index))
        this.values[index] = [];
      // index degerinde gonderilen key yoksa uzunlugu arttir.
      if(!this.values[index].hasOwnProperty(key))
        this.length++;
      // index degrinin key degerine gelen value degerini ata. => { "0":{Canada:"300"} } 
      this.values[index][key] = value;
    }

    search(key){
      // bana index degeri verir
      let index = this.hash(key);
      if(this.values.hasOwnProperty(index) && this.values[index].hasOwnProperty(key))
        return this.values[index][key];
      return null;
    }

    remove(key) {
      let index = this.hash(key);
   
      for (let i = 0; i < this.values[index].length; i++) {
         // Find the element in the chain
         if (this.values[index][i].key === key) {
            this.values[index].splice(i, 1);
            return true;
         }
      }
      return false;
   }
    
}


 
const ht = new HashTable();
ht.add("Canada","300");
ht.add("Germany","100");
ht.add("Italy","50");
ht.add("Ahmoo","150");

console.log(ht.search("Italy"));
console.log(ht);


