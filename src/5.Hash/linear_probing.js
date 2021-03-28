class HashTable {
    constructor(size){
        this.size  = size;
        this.keys = []
        this.values = []
        this.limit = 0;
    }

    hash(key){
        // gonderilen key degerinin tam sayi olup olmadigini kontrol eder
        if(!Number.isInteger(key)) throw 'must be int';

        return key % this.size;
    }

    add(key,value){
        if(this.limit >= this.size) throw 'hash table is full';

        let index = this.hash(key);
        while(this.keys[index] != null){
            index++;
            index = index % this.size;
        }
        this.keys[index] = key;
        this.values[index] = value;
        this.limit++;

    }

    search(key){
        let index = this.hash(key);

        while(this.keys[index] != key){
            index++;
            index = index % this.size;
        }

        return this.values[index];
    }

}



const ht = new HashTable(13);
ht.add(7,"hi");
ht.add(20,"hello");
ht.add(79,"whather");
ht.add(90,"sad");

console.log(ht);