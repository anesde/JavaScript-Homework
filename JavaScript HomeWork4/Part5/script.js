let array = [3, 5, 6, 8, 11]

function findBigger() {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function findSmallest() {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function sumOfAllNumbers() {
    let result = findBigger(array) + findSmallest(array);
    return result; 
}

let sumNumbers = sumOfAllNumbers(array);
console.log(sumNumbers);
let biggestNum = findBigger(array);
console.log(`MAX: ${biggestNum}`);
let smallestNum = findSmallest(array);
console.log(`MIN: ${smallestNum}`);