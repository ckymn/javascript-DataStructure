 
class HashTable {
    constructor() {
      this.table  = new Array(137);// alanimiz
      this.values = []; // new alan
    }
    
    // Bir HashTable anahtar(H) olarak kullanılmasına izin veren karma işlevin tanımlanması :[ saklanacak  yer = H % 137 ]
    hash(string) {
      const H   = 37;
      let total = 0;
  
      // Degerimiz string oldugu icin ASCII kodunu ile islem yapilir.
      for (var i = 0; i < string.length; i++) {
        total += H * total + string.charCodeAt(i);
      }
      //hashing 
      total %= this.table.length;
      
      if (total < 1) {
        this.table.length -1
      }
      
      console.log("total : ", total, "parseTotal :",parseInt(total));
      return parseInt(total);
    }
    //print
    showDistro() {
      for (const key in this.table) {
        if(this.table[key] !== undefined) {
          console.log(key, ' : ', this.table[key]);
        }
      }
    }
    //hashing - guncelleme
    put(data) {
      const pos = this.hash(data);
      this.table[pos] = data;
    }
    //hashing - arama
    get(key) {
      return this.table[this.hash(key)];
    }
  }
  
  // HashTable 'da çakışmaya(collusıon) karşı yapılan cozumlerden biri : [ Build Chains ] 
  class HashTableBuildChains extends HashTable {
    constructor() {
      super();
      this.buildChains();
    }
    buildChains() {
      for (var i = 0; i < this.table.length; i++) {
        this.table[i] = new Array();
      }
    }
  
    showDistro() {
      for (const key in this.table) {
        if(this.table[key][0] !== undefined) {
          console.log(key, ' : ', this.table[key]);
        }
      }
    }
  
    put(key, data) {
      const pos = this.hash(key);
      let index = 0;
      if(this.table[pos][index] === undefined) {
        this.table[pos][index] = data;
      } else {
        ++index;
        while (this.table[pos][index] !== undefined ) {
          index++;
        }
        this.table[pos][index] = data;
      }
    }
  
    get(key) {
      const pos = this.hash(key);
      let index = 0;
      while (this.table[pos][index] != key) {
        if(this.table[pos][index] !== undefined) {
          return this.table[pos][index]
        } else {
          return undefined;
        }
        index++;
      }
    }
  }
  
  // HashTable 'da çakışmaya(collusıon) karşı yapılan cozumlerden biri : [ Linear Probing ]
  class HashTableLinearProbing extends HashTable {
    constructor() {
      super();
      this.values = new Array();
    }
  
    put(key, data) {
      const pos = this.hash(key);
      if(this.table[pos] === undefined) {
        this.table[pos]  = key;
        this.values[pos] = data;
      } else {
        while(this.table[pos] !== undefined) {
          pos++;
        }
        this.table[pos]  = key;
        this.values[pos] = data;
      }
    }
  
    get(key) {
      const hash = this.hash(key);
      if (hash > -1) {
        for (let i = hash; this.table[i] !== undefined; i++) {
          if (this.table[i] === key) {
            return this.values[i];
          }
        }
      }
      return undefined;
    }
  
    showDistro() {
      for (const key in this.table) {
        if(this.table[key] !== undefined) {
          console.log(key, ' : ', this.values[key]);
        }
      }
    }
  }

  let list = new HashTable();
  list.hash("m");
  list.showDistro();
  console.log(list);