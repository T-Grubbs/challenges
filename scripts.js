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
  // create object with keys to equal the digital number
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
  // since Roman numuerals are letters, create an empty //string to add letters together


	var roman = '';
	for (let key in romanToNum) {
  // loops through the object ..

		while (num >= romanToNum[key]) {
  //as long as the num (57 )is >= the value of key in the //object, 57 is greater than L but less than XC.
  //the forWhile loop stops at 50 in this case

			roman += key;
  //add the key into the empty string ('' + L)
			num -= romanToNum[key];
  //subtract the value of the key from the number (57-50)
  //now num equals 7

		}
	}

	return roman;
}

solution(57);





// Delete occurrences of an element if it occurs more than n times




function deleteNth(arr, n) {
    // ...
  
    let nums = []
    let occurences = {}
  
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i]
  
      if (!occurences[element]) {
        occurences[element] = 1;
        console.log(occurences[element])
        console.log(occurences, "this is the first IF");
        
      } else {
        occurences[element] += 1;
        console.log(occurences, "This is the SECOND IF");
      }
      if (occurences[element] <= n) {
          nums.push(element);
          console.log(occurences, "THE FINAL IF");
          console.log(nums, "the nums")
      }
    }
    return nums;
  
  }
  