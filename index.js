// Création du contexte
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Création des constantes
const PIXEL = 100;
const LIGNE = canvas.width/PIXEL;
const COLONNE = canvas.height/PIXEL;

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



