let prompt = require('prompt');

prompt.start();
let cost, payment = 0;

console.log("What is your total cost in dollars?")
prompt.get('c', function (err, result) {
    cost = result.c;
    console.log("How much did you pay in dollars?")
    prompt.get('p', function (err, result) {
        payment = result.p;
        console.log("Your change is: ");
        getChange(cost, payment);
    })
})

function getChange(cost, payment) {
    let difference = (payment - cost) * 100;
    let change = [{"type":"dollar", "cost": 100}, {"type":"quarter", "cost": 25}, 
    {"type":"dime", "cost": 10}, {"type":"nickel", "cost": 5}, {"type":"penny", "cost": 1}];

    change.map(coin => {
        console.log(coin.type, ":", Math.floor(difference/coin.cost));
        difference = difference % coin.cost;
    })
}