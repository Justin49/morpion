// Création du contexte
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Création des constantes
const PIXEL = 100;// taille du pixel
const LIGNE = canvas.width/PIXEL;
const COLONNE = canvas.height/PIXEL;
const ROND = 0;// correspond au rond traditionnel, ici c'est 0
const CROIX = 1;// correspond à la croix traditionnel, ici c'est 1

// fonction qui va créer le tableau du morpion
function créerTableau() {

    // Création de la grille
    const tableau = new Array(LIGNE);

    for(var i = 0; i < tableau.length; i++) {

        tableau[i] = new Array(COLONNE);
    }

    return tableau;

}

let tableau = créerTableau();
console.log(tableau);

// fonction qui va dessiner la grille du morpion
function dessinerTableau(tableau) {

    for(var i = 0; i < tableau.length; i++) {

        for(var j = 0; j < tableau[i].length; j++) {

            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.rect(i*PIXEL, j*PIXEL, PIXEL, PIXEL);
            ctx.stroke();
            ctx.fill();
        }
    }
}

dessinerTableau(tableau);

// création de l'évènement qui permettera de bouger à l'intérieur de la grille
document.addEventListener('keydown', deplacementDansGrille);

var vitesseDeplacementGrilleHorizontal = 0;
var vitesseDeplacementGrilleVertical = 0;

function deplacementDansGrille(evt) {

    switch(evt.keyCode) {

        case 37:
            // touche gauche
            vitesseDeplacementGrilleHorizontal = -PIXEL;
            vitesseDeplacementGrilleVertical = 0;
            console.log('gauche');
            break;
        case 38:
            // touche haut
            vitesseDeplacementGrilleHorizontal = 0
            vitesseDeplacementGrilleVertical = -PIXEL;
            console.log('haut');
            break;
        case 39:
            // touche droite
            vitesseDeplacementGrilleHorizontal = PIXEL;
            vitesseDeplacementGrilleVertical = 0;
            console.log('droite');
            break;
        case 40:
            // touche bas
            vitesseDeplacementGrilleHorizontal = 0;
            vitesseDeplacementGrilleVertical = PIXEL;
            console.log('bas');
            break;
        case 32:
            // touche espace
            vitesseDeplacementGrilleHorizontal = 0;
            vitesseDeplacementGrilleVertical = 0;
            break;
    }
}




