// Burda Amac Karmasikligi en aza indirerek dizi siralamasi yapabilmek
// Yapilan islem pivot , sol ve sag diyerek degiskenler belirleyip pivot degerden buyuk ise saga , kucuk ise sola yerlestirme yaparak siralama elde etmek
// Yapilan degisiklikleri farkli bir degerde tutmak yerine , pivot degerini herzaman referens alarak yer degisikligi yapmak isin hizlanmasi da burda basliyor.
// ! Eger sagdaki eleman pivot degerden buyuk ise replace edilmiyecek sagdaki gosterge 1 sola kayacak
// ! Eger soldaki eleman pivot degerden kucuk ise replace edilmiyecek soldaki gosterge 1 saga kayacak
//?: Eger sirasiz bir dizi verilmis ise Worts Case : O(logn^2)
//?: Eger sirali bir dizi verilmis ise Worts Case : O(n^2) 


//TODO: Pivot last of array

const swap = (arr, left, right) => {
	return [arr[left], arr[right]] = [arr[right], arr[left]]
};

const partition = (arr, low, high) => {
	// Ilk elemani pivot eleman olarak secin
	let pivot = arr[high];
	let i = low;
	
	// Pivotu kullanarak diziyi ikiye bolun
	for(let j = low; j < high; j++){
		if(arr[j] <= pivot){
			swap(arr,i,j);
			i++;
		}
	}

	swap(arr,i,high);
	// pivot'un index degerini donder
	return i;
}

const quickSort = (arr) => {
	// Başlangıç ​​ve bitiş dizinini depolamak için yığın
	let stack = [];

	let start = 0;
	let end = arr.length - 1;

	stack.push({ x: start, y: end});

	while(stack.length){
		//Yığının başlangıcını ve sonunu alın
		const { x, y } = stack.shift();
	
		// Diziyi pivot boyunca böl
		const PI = partition(arr, x, y);

		// Alt diziyi yığına döndürmekten daha az öğeyle itin
		if(PI - 1 > x)
			stack.push({ x: x, y: PI -1 });
		
		if(PI + 1 < y)
			stack.push({ x: PI + 1, y : y});
	}
}

let arr = [10, 9, 2, 4, 6, 36];
quickSort(arr);
console.log(arr);