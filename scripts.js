//Hacker Rank Sock Merchant Challenge

// Complete the sockMerchant function below.
sockMerchant = (n, ar) => {
	let sorted = ar.sort(function(a, b) {
		return a - b;
	});
	let matches = [];
	let count = 0;

	for (let i = 0; i < sorted.length; i++) {
		matches.unshift(sorted[i]);
		if (matches[0] === sorted[i]) {
			matches.splice(0);
			count++;
		}
	}
	return count;
};

//CODE WARS ROMAN NUMBERAL CONVERTER 

function solution(num) {
	// convert the number to a roman numeral
	var romanToNum = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	var roman = '';
	for (let key in romanToNum) {
		while (num >= romanToNum[key]) {
			roman += key;
			num -= romanToNum[key];
		}
	}

	return roman;
}

solution(57);





// Delete occurrences of an element if it occurs more than n times



function deleteNth(arr,n){
    // ...
  }