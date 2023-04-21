// Selectam elementele html

const scoreDisplay = document.getElementById("score");
const problemDisplay = document.getElementById("problem");
const playerInput = document.getElementById("result");

let gameScore = 0
let a, b;
let gameLevel = 10

function getRandomNb(level) {
    return Math.floor(Math.random() * level) + 1;
}

function newProblem(level) {
    a = getRandomNb(level)
    b = getRandomNb(level)

    problemDisplay.style.color = "blacl";

    return a + " + " + b
}

function newGame(level) {
    // setam valorile initiale
    gameScore = 0
    gameLevel = level;
    newProblem(level); 

    // afisam in html
    scoreDisplay.textContent = gameScore
    problemDisplay.textContent = newProblem(level);
}

// verificarea rezultatului

function verifyResult() {
    const sumLenght = (a + b).toString().length;
    if (playerInput.value  == a + b){

//  Verificam cate cifre are suma
    const sumLength = (a + b).toString().length

    
    gameScore++;

    scoreDisplay.textContent = gameScore
    problemDisplay.textContent = newProblem(gameLevel);
    playerInput.value = "";
    }
    // In caz contrar - valoarea NU este = suma numerelor
    else if (playerInput.value.length == sumLength) {
        problemDisplay.style.color = "red";
    }
}
playerInput.addEventListener("input", verifyResult)
newGame(gameLevel); 