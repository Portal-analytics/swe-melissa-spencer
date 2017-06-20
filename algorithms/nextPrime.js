let prompt = require('prompt');

prompt.start();

console.log("Enter a positive integer ")
prompt.get('n', function (err, result) {
  console.log("Next Prime: ");
  nextPrime(result.n)
})


function nextPrime(n) {
  let nextPrime = n
  let prime = false;

  while (!prime) {
    nextPrime++;
    prime = true;
    for (let i = 2; i < nextPrime; i++) {
      if (nextPrime % i == 0) {
        prime = false;
      }
    }
  }
  console.log(nextPrime);
  console.log("Would you like to find the next prime number? (Enter 'YES' to continue): ");
  prompt.get('userInput', function (err, result) {
    if (result.usrInput.toUpperCase() == "YES") {
      console.log("The next prime is ");
      nextPrime(nextPrime);
    }
  })
}