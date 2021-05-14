// Burda amac dizideki elemanlari siralama islemi yapmak
// Yapilacak islem herzaman ilk iki elemani karsilastirarak sirali birsekilde dizinin sonuna kadar gider.

const Sorting = (arr) => {

	
	for(let i = 0; i < arr.length; i++){
		
		let state = false;

		for(let j = i+1; j < arr.length; j++){

			if(arr[i] > arr[j]){
				[arr[i], arr[j]] = [arr[j], arr[i]]
				state = true;
			}
		}


		if(!state) return arr;
		
	}

}

const arr = [5,2,7,6,1,3,9];
const result = Sorting(arr);
console.log(`Bubble Sort : ${result}`);