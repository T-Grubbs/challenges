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
