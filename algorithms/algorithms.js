let prompt = require('prompt');

prompt.start();

function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  let first = 1;
  let second = 1;
  let fib = 0;
  let counter = 2;
  while (counter < n) {
    fib = first + second;
    first = second;
    second = fib;
    counter++;
  }
  return fib;
}

// only returns one number
function primeFactorization(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return primeFactorization(i), primeFactorization(n / i);
    }
  }
  console.log(n);
}

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
}

let findNextPrime = true;
console.log("Enter a positive integer: ")
prompt.get('n', function (err, result) {
  // 
  // Log the results. 
  // 
  console.log("Fibonacci: " + fibonacci(result.n));
  console.log("Prime Factorization: " + primeFactorization(result.n));
  while (findNextPrime) {
    findNextPrime = false;
    console.log("Next Prime: " + nextPrime(result.n));
    console.log("Would you like to find the next prime number? (Enter 'YES' to continue): ");
    prompt.get('userInput', function (err, result) {
      if (result.userInput.toUpperCase() == "YES") {
        findNextPrime = true;
      }
    });
  }
});