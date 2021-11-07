// liste d'images 16 images, 8 x2
// Operation melange des cartes
let albums = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

let shuffle = function() {
    albums.sort(() => (Math.random() > 0.5) ? 1 : -1) // Trie des elements du tableau
}  // explication du .sort random: https://openclassrooms.com/forum/sujet/je-ne-comprends-pas-ce-code-0-5-math-random
shuffle();
console.log(albums);


// variable imgs qui recupere tous les elements du nom 'img' dans l'html
let imgs = document.getElementsByTagName('img');

// Fonction affichage des elements recupérées dans le tableaupour pouvoir les mettre en place lorsqu'on clique sur le bouton commencer la partie
function display() {

// variable imgs qui recupere tous les elements du nom 'img' dans l'html
let imgs = document.getElementsByTagName('img');

// Boucle for of pour parcourir le tableau d'images
for(let i=0; i<albums.length; i++) {
imgs[i].src = 'img/Rock/album' + albums[i] + '.jpg';
// la source des images dans img/Rock/album + le tableau + .jpg
}
}




// recupere l'element bouton

const elt = document.getElementById('bouton');

elt.addEventListener('click', function(display) {
    

});
console.log(display);