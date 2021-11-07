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

// Boucle for of pour parcourir le tableau d'images
for(let i=0; i<albums.length; i++) {
    imgs[i].src2 = 'img/Rock/album' + albums[i] + '.jpg';
}


let step = 1;
let p1, p2;
document.addEventListener('click', function(e) { // fonction de callback e=event
    switch(step) {
        case 1: // premier click
            if (e.target.tagName=='IMG') {
                e.target.src = e.target.src2;
                p1 = e.target.src2;
                step = 2;
            }
            break;
        case 2: // premier click
            if (e.target.tagName=='IMG') {
                e.target.src = e.target.src2;
                p2 = e.target.src2;
                step = 3;
            }
        case 3: // click suivant, n'importe où: comparaison/action   
        if (p1==p2) {
            alert("same");
        } else {
            
        }
    }
})

// le jeu:
// premier click: retourner l'image => memoriser la carte retournée
// deuxieme click: retourner l'image => memoriser la carte retournée
// puis comparer les 2 images
// si identiques => les supprimer
// sinon => les retourner