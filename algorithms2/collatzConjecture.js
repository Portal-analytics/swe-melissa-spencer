let prompt = require('prompt');

prompt.start();

console.log("Enter a number greater than 1");
prompt.get('n', function (err, result) {
    console.log('Number of Steps', collatz(result.n));
})

function collatz(n) {
    if (n == 1){
        return 1;
    }
    if (n % 2 == 0) {
        return 1 + collatz(n / 2);
    }
    else {
        return 1 + collatz(3 * n + 1);
    }
}