let array = ["Anes", "good", "working"];

function tellStory(inputArray) {
    let result = `This i ${inputArray[0]}. ${inputArray[0]} is a nice person. Today they are ${inputArray[1]}. They are ${inputArray[2]} all day. The end. `
    return result;
}

let resultOfTellStory = tellStory(array);
console.log(resultOfTellStory);