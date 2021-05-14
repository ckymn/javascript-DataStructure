// Burda amac dizideki elemanlari siralama islemi yapmak
// Burdaki islem dizideki en kucuk elemani secerek bastaki eleman ile yerdegistirir. Daha sonra aramaya bir sonraki dizi elemanindan baslar aramaya.

const Sorting = (arr) => {

	
	for(let i = 0; i < arr.length; i++){
		
		let minIndex = i;

		for(let j = i+1; j < arr.length; j++){
			if(arr[minIndex] > arr[j])
				minIndex = j;
		}	

		if(minIndex !== i){
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
		}

	}
	return arr;
}

const arr = [5,2,7,6,1,3,9];
const result = Sorting(arr);
console.log(`Selection Sort : ${result}`);