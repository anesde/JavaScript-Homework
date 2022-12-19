//EndsWith e bulit-in funkcija vo JavaScript koja se koristi za proverka na posledniot zbor vo daden string
// I kako rezultat vrakja boolean;


function isPlural(inputString) {
    console.log(inputString.endsWith('s'));
}

isPlural("Changes");
isPlural("Change")
isPlural("Dudes");
isPlural("Magic");