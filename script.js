//"Red", "Blue", "Yellow" ,"Green"
//"Square", Triangle, "Circle", "Rectangle" 
//"English", "Spanish", "Japanese", "Chinese"  

//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

//Options values for buttons

let options = {
    colors:["Red", "Blue", "Yellow" ,"Green"],
    shapes:["Square", "Triangle", "Circle", "Rectangle" ],
    languages:["English", "Spanish", "Japanese", "Chinese"],
};