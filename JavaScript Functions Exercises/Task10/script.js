function thrutyOrFalse(input) {
    if(input === false || input === null || input === 0 || input === NaN  || input === "" || input === undefined) {
        return 0;
    } else {
        return 1;
    }
}

let a = thrutyOrFalse("");
let b = thrutyOrFalse(false);
let c = thrutyOrFalse(0);
let d = thrutyOrFalse("false");

console.log(a);
console.log(b);
console.log(c);
console.log(d);