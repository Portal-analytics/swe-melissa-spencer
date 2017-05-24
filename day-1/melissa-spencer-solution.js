function threeNFive (x) {
	let sum = 0;
	for (let i = 0; i < x; i++) {
		if ((i % 3 == 0) || (i % 5 == 0)) {
			sum += i;
		}
	}
	return sum;
}

console.log(threeNFive(1000));