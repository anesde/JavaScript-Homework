

function equalCharacters(inputString1, inputString2) {
    if(inputString1.length === inputString2.length) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

equalCharacters("AB", "CD");
equalCharacters("ABC", "DE");
equalCharacters("hello", "sedc");