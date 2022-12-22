let firstHeader = document.getElementById("myTitle").innerText = "Header is changed";
let firstParagraph = document.getElementById("myTitle").nextElementSibling.innerText = "I changed the text in the first paragraph";
let secondParagraph = document.querySelector(".second").innerText = "I changed the text in the second paragraph";
let text = document.querySelector("text").innerText = "The change in the text section";
let header3 = document.querySelector("h3").innerText = "Todor check this!";
let sibling = document.getElementsByTagName("h3");
let siblingElement = sibling[0];
let firstElement = siblingElement.previousElementSibling;
firstElement.innerText = "Homework is done";


