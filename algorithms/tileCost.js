let prompt = require('prompt');

prompt.start();
let w, h, c = 0;

console.log("What is the width in feet?")
prompt.get('w', function (err, result) {
    w = result.w;
    console.log("What is the height in feet?")
    prompt.get('h', function (err, result) {
        h = result.h;
        console.log("What is the cost of tile in $/ft^2?")
        prompt.get('c', function (err, result) {
            c = result.c;
            console.log("The cost is $", w * h * c);
        })
    })
})