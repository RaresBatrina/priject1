// selectam elementele html

const game = document.getElementById("container");
const selectedCards = document.getElementsByClassName("active");
const foundCards = document.getElementsByClassName("found")

const emoji = [
    "😎", "😛", "😴", "🤑", "👺",
    "😎", "😛", "😴", "🤑", "👺",
    
];

function newGame() {
    game.innerHTML = "";
    shuffle();
    createCards();
}

function createCards() {
    for (let i = 0; i < emoji.length; i++) {
        // pentru fiecare element din lista, cream continut HTML
        const card = document.createElement("div");
        const text = document.createElement("p");

        card.classList.add("card");
        text.textContent = emoji[i];

        card.append(text);
        card.setAttribute("onclick", "match(this)")

        game.append(card);
    }
}
// Functie care ne amesteca lista

function shuffle() {
    let listLenght = emoji.length;
    let randomIndex;
    let temp;
    
    for (let i = 0; i < listLenght; i++) {
        randomIndex = Math.floor(Math.random() * listLenght);
        temp = emoji[i];
        emoji[i] = emoji[randomIndex];
        emoji[randomIndex] = temp;
    }
}

// Functie care verifica o pereche de carduri
function match(card) {
    // Daca elementul selectat este deja gasit(are clasa found) SAU daca am selectat doua sau mai multe carduri, nu se intampla nimic
    if(card.classList.contains("found") || selectedCards.length >= 2) {
        return
    }

// Altfel adaugam clasa active
     card.classList.add("active");

    //  Daca sunt selectate 2 carduri, le comparam
    if(selectedCards.length == 2) {
        // Intarziem verificare cu 0,5s
        setTimeout(function() {
            // daca au acelasi emoji
            if(selectedCards[0].textContent == selectedCards[1].textContent) {
                // adaugam clasa found
                selectedCards[0].classList.add("found");
                selectedCards[1].classList.add("found");
            }
            // indiferent de situatie scoatem clasa active
            selectedCards[1].classList.remove("active");
            selectedCards[0].classList.remove("active");

            // verificam cate carduri cu clasa found am gasit
            if(foundCards.length == emoji.length) {
                newGame();
            }
        }, 500);
    }

}


newGame();