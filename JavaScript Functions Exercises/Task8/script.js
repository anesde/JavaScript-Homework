function match(inputString1, inputString2) {
    if(inputString1.toLowerCase() === inputString2.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));