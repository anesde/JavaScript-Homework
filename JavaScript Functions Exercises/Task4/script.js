function returnRemainder(x, y) {
    let remainder = x % y;
    return remainder;
}

let result = returnRemainder(1, 3);
let result2 = returnRemainder(3, 4);
let result3 = returnRemainder(-9, 45);
let result4 = returnRemainder(5, 5);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);