// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN

const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Muutettu Teksti";
});

// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");
});

// Tehtävä 2

const showAnimalButton = document.querySelector("#showAnimalButton");
const animalContent = document.querySelector("#animalContent");
const hideAnimalButton = document.querySelector("#hideAnimalButton");

let h3 = document.createElement("h3");
h3.textContent = "Päivän Eläin";

let p = document.createElement("p");
p.textContent = "Panda";

let image = document.createElement("img");
image.src = "images/panda.png"
image.alt = "Panda Kuva"

showAnimalButton.addEventListener("click", function () {
    animalContent.innerHTML = "";

    animalContent.append(h3, p, image)

    animalContent.hidden = false;
});

hideAnimalButton.addEventListener("click", function () {
    animalContent.hidden = true;
})

// Tehtävä 3

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// listener for the select element from the drop down list.

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

      // function to update the DOM based on the selected animal

      console.log("selected animal:", selectedAnimal);

      if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tämä on tiikeri";
        animalDescription.textContent = "Tiikerit ovat raidallisia ja melko rauhallisia eläimiä";
      } else if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Tämä on pingviini";
        animalDescription.textContent = "Tiikerit ovat raidallisia ja melko rauhallisia eläimiä";
      } else if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Tämä on panda";
        animalDescription.textContent = "Tiikerit ovat raidallisia ja melko rauhallisia eläimiä";
      } else {
        animalName.textContent = "Elefantti";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Tämä on elefantti";
        animalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
      }
});

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});

// listener for the select element from the drop down list.
// function to update the DOM based on the selected animal

// -------------------------------------------------- EXAMPLE 4 CSS
// -------------------------------------------------- EXAMPLE 4 CSS

const heading = document.querySelector("#taskOneHeading");
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    heading.classList.toggle("highlight");
});

// Harjoitus 4
const submit = document.querySelector("#submit");

submit.addEventListener("click", function () {
    console.log("nappia painettu!");
});

const animalForm = document.querySelector("#animalForm");

animalForm.addEventListener('submit', (event) => {
    event.preventDefault();
})


const observationAnimal = document.getElementById('observationAnimal').value;
const observationLocation = document.getElementById('observationLocation').value;
const observationDate = document.getElementById('observationDate').value;
