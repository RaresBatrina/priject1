// selectam elementele html
const body = document.body;
const darkModeToggler = document.getElementById("dark-mode");
const cardsContainer = document.getElementsByClassName("cards-list") [0];
const searchForm = document.getElementById("searchForm")
let serchInput;

// verificam daca exista searchForm in pagina

darkModeToggler.addEventListener("click", function() {
    body.classList.toggle("dark-mode")
})

// verificam culoarea profilului
if (searchForm) {
    // selectam search input din formular
    searchInput = searchForm.querySelector("input")

    searchInput.addEventListener("input", searchProjects)
}

let projects = [];

if (window.matchMedia("(prefers-color-scheme: dark)").
matches && window.matchMedia) {
    body.classList.toggle("dark-mode")
}

// generam elementele html pentru un card
function generateCard(proiect) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add("card");

    const cardImg = document.createElement("img");
    cardImg.src = proiect.img;
    cardImg.alt = proiect.nume;

    div.append(cardImg);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const title = document.createElement("h3");
    title.textContent = proiect.nume;
    cardContent.append(title);

    const descriere = document.createElement("p");
    descriere.textContent = proiect.descriere;
    cardContent.append(descriere);

    const cardBtn = document.createElement("button");
    cardBtn.textContent = "Mai Multe";

    cardBtn.onclick = function () {
        location.href = proiect.link;
    }

    cardContent.append(cardBtn);
    div.append(cardContent);

    li.append(div);
    cardsContainer.append(li);

}

// functie care  returneaza cardul cautat
function searchProjects(event) {
    event.preventDefault();

    // salvam valoarea din searchInput
    const searchValue = searchInput.value
    
    // filtram lista de proiecte dupa nume
    const found = projects.find(project => project.nume.toLowerCase().includes(searchValue.toLowerCase()));

    if (!found || !searchValue) {
        console.log("No match or no value")

        cardsContainer.innerHTML = "";
        projects.forEach(function(project) {
            generateCard(project);
        })
    }
    else{
        cardsContainer.innerHTML =""
        generateCard(found)
    }
}