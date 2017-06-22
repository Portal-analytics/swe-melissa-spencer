let prompt = require('prompt');

prompt.start();

let decimal = false;
console.log("Convert to 'Binary' or 'Decimal'?");
prompt.get('d', function (err, result) {
    if (result.d.toUpperCase() == "DECIMAL") {
        decimal = true;
    }

    if (decimal) {
        console.log("Enter a number in binary");
        prompt.get('n', function (err, result) {
            convertToDecimal(result.n);
        })
    }
    else {
        console.log("Enter a number in decimal");
        prompt.get('n', function (err, result) {
            convertToBinary(result.n);
        })
    }

})

function convertToDecimal(n) {

}

function convertTOBinary(n) {
    
}