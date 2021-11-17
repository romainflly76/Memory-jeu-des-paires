// Fonction affichage dpuis l'ecoute de la span html
function fonctionDisplayRock() {
  let rock = document.getElementById("memoryRock");
  rock.classList.toggle("hidden");
}
function fonctionDisplayCinema() {
  let cinema = document.getElementById("memoryCinema");
  cinema.classList.toggle("hidden");
}
function fonctionDisplayPhotos() {
  let photos = document.getElementById("memoryPhotos");
  photos.classList.toggle("hidden");
}

let count = 0;
let albums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
console.log(albums);

let shuffle = function () {
  albums.sort(() => (Math.random() > 0.5 ? 1 : -1)); // Trie des elements du tableau
  console.log(albums);
}; // explication du .sort random: https://openclassrooms.com/forum/sujet/je-ne-comprends-pas-ce-code-0-5-math-random
shuffle();

function cards() {
  let cardrocks = document.getElementsByClassName("carte");
  // Boucle for of pour parcourir le tableau d'images
  for (let i = 0; i <= 16; i++) {
    cardrocks[i].onclick = function () {
      cardrocks[i].src = "img/Rock/album" + albums[i] + ".jpg";
      console.log(cardrocks[i].src);
      count++;
      if (count === 2) {
      }
    };
    // cardrocks[i].src = "img/Rock/album" + albums[i + 1] + ".jpg";
  }
}
cards();
