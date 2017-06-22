let prompt = require('prompt');

prompt.start();

let unsorted = [];
console.log("What numbers would you like to sort?");
prompt.get('n', function (err, result) {
    unsorted = result.n.split(" ").map(Number);
    console.log("Bubble sort", bubbleSort(unsorted));
    console.log(mergeSort(unsorted));
})

function bubbleSort(numbers) {
    let sorted = numbers;
    for (let i = 0; i <sorted.length; i ++) {
        for (let j = 0; j < sorted.length - (i + 1); j++) {
            if (sorted[j+1] < sorted[j]) {
                let temp = sorted[j];
                sorted[j] = sorted[j+1];
                sorted[j+1] = temp;
            }
        }
    }
    return sorted;
}

// function mergeSort(numbers) {
//     if (numbers.length == 2) {
//     }
//     else {
        
//     }
// }