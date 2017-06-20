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

console.log("Enter a positive integer: ")
prompt.get('n', function (err, result) {
  console.log("Fibonacci: " + fibonacci(result.n));
});