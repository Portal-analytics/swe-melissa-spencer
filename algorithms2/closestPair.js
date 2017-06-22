let prompt = require('prompt');

prompt.start();

let pairs = []
console.log("What numbers would you like to sort? (ie. '(4,5);(2,3);(1,2)' )");
prompt.get('n', function (err, result) {
    pairs = result.n.split(';');
    pairs = pairs.map(pair => {
        return pair.replace('(','').replace(')','').split(',').map(Number);
    })
    
    let newPair = closestPair(pairs);
    console.log("The closest pair is", newPair[0], "and", newPair[1]);
})

function closestPair(pairs) {
    let shortest = -1;
    let pair1, pair2 = [];
    for (let i = 0; i < pairs.length; i ++) {
        for (let j  = pairs.length - 1; j > i; j --) {
            let newLength = Math.pow(pairs[i][0] - pairs[j][0], 2) + Math.pow(pairs[i][1] - pairs[j][1], 2)
            if (newLength < shortest || shortest == -1) {
                shortest = newLength;
                pair1 = pairs[i];
                pair2 = pairs[j];
            }
        }
    }
    return [pair1, pair2];
}