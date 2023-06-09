// Selectam elementele html
const textCss = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const randomBtn = document.querySelector("#randomBtn")
const body =  document.body;

function setGradient(firstColor, secondColor) {
    body.style.background = "linear-gradient(to right," + firstColor + "," + secondColor +")";

    textCss.textContent = body.style.background + ";";
}

function setGradientOnInput() {
    setGradient(color1.value, color2.value);
}

function randomNb() {
return Math.floor(Math.random() *Math.floor(255))
}

function randomColor() {
    return "rgb(" + randomNb() + "," + randomNb() +"," +randomNb() +")";
}

// console.log(randomColor())

function setRandomGradient() {
    setGradient(randomColor(), randomColor())
}

randomBtn.addEventListener("click", setRandomGradient)

color1.addEventListener("input", setGradientOnInput)
color2.addEventListener("input", setGradientOnInput)



setGradientOnInput();