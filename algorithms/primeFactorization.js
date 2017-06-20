let prompt = require('prompt');

prompt.start();

// only returns one number
function primeFactorization(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return primeFactorization(i), primeFactorization(n / i);
        }
    }
    console.log(n);
}

console.log("Enter a positive integer: ")
prompt.get('n', function (err, result) {
    console.log("Prime Factorization: ");
    primeFactorization(result.n)
});