let prompt = require('prompt');

prompt.start();
let morgage, interest, year = 0;

console.log("What is your total loan in dollars?")
prompt.get('m', function (err, result) {
    morgage = result.m;
    console.log("What is the annual interest rate of the loan? (must be between 0-1)")
    prompt.get('i', function (err, result) {
        interest = result.i;
        console.log("How many years are left on your loan?")
        prompt.get('y', function (err, result) {
            year = result.y;
            console.log("Your amotized annual payment is $", calculateMorgage(morgage, interest, year));
        })
    })
})

function calculateMorgage(morgage, interest, year) {
    let dividend = morgage * parseFloat(interest) * Math.pow(parseFloat(interest) + 1, parseFloat(year));
    let divisor = Math.pow(parseFloat(interest) + 1, parseFloat(year)) - 1;
    return dividend/divisor;
}