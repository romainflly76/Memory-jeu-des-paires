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
  const pairVerify = [];
  const pairSuccess = [];
  // Boucle for of pour parcourir le tableau d'images
  for (let i = 0; i <= 16; i++) {
    cardrocks[i].onclick = function () {
      pairVerify.push([albums[i], i]);

      if (pairVerify.length <= 2) {
        // this.src = "img/Rock/album" + albums[i] + ".jpg";
        cardrocks[i].src = "img/Rock/album" + albums[i] + ".jpg";
      }

      if (pairVerify.length >= 2) {
        pairVerify.splice(2, 1);
      }

      if (pairVerify[1] !== undefined) {
        if (pairVerify[0][0] === pairVerify[1][0]) {
          pairSuccess.push(pairVerify[0][0]);
          pairVerify.splice(0, 2);
        } else {
          setTimeout(() => {
            cardrocks[pairVerify[0][1]].src = "img/Sans titre.png";
            cardrocks[pairVerify[1][1]].src = "img/Sans titre.png";
            pairVerify.splice(0, 2);
          }, 2000);
        }
      }

      if (pairSuccess.length === 8) {
        setTimeout(() => {
          alert("Vous avez gagner");
        }, 2000);
      }
    };
    // cardrocks[i].src = "img/Rock/album" + albums[i + 1] + ".jpg";
  }
}
cards();
