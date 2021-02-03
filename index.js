/* Règle du morpion : 

    - se joue sur une grille de 3*3
    - se joue à 2 joueurs
    - se joue tour par tour
    - chaque joueur choisit un symbole soit X ou O
    - un joueur ne peut pas placer un symbole sur une case qui en contient déjà un
    - si un des joueurs place un symbole sur une case qui en contient déjà un, sinon on affiche un message qui dit qu'il s'est tromper
    - un des joueurs gagne la partie si il aligne horizontalement, verticalement ou diagonalement ses 3 symboles
    - on vérifie à chaque tour si il y a un gagnant ou pas
    - si il y a un gagnant on affiche un message qui dit que joueur 1 ou joueur 2 à gagner
    - si il y en à pas alors c'est au joueur suivant de jouer

*/

function boucleDuJeu() {

    // Je selectionne les bouttons de toute la grille du morpion
    var carre = document.querySelectorAll("#jeu button");
    console.log(carre);

    // Les 2 joueurs sont représentés par un des symboles suivant, X ou O
    var joueurs = ["X", "O"];

    // Une variable qui va représenter le nombre de tour mis au départ à 0, car on commence au tour 1
    var tour = 0;

    // Une variable boolean qui indique que le jeu est finis ou non, valeur par défault à false
    var jeuEstFini = false;

    // Une variable qui va venir modifier l'état du statut du jeu, par exemple en affichant des messages au joueur
    var afficheMessage = new Affichage(document.querySelector("#statutDuJeu"));
    afficheur.envoyerMessage(

        "Le jeu est sur le point de commencer ! <br/> Joueur " + joueurs[tour] + "C'est votre tour."
    );
}



// Fonction qui indique si une case est disponible avec le bouton en parmètre
function estDisponible(bouton) {

    return bouton.innerHTML.length == 0;
}

// Fonction qui va mettre un symbole dans une des cases du morpion
function mettreSymboleDansCase(bouton, symbole) {

    bouton.innerHTML = symbole;
}

// Fonction qui va rechercher un vainqueur, on test toutes les posibilitées qu'un joueur puisse gagner à différent tour de jeu
function rechercherVainqueur(bouton, joueurs, tour) {

    // par exemple si au tour 0, un joueur ayant mis un X dans les cases 0,1 et 2 de la grille du morpion alors on considère qu'il est vainqueur
    // vainqueur avec les lignes
    if(bouton[0].innerHTML == joueurs[tour] && bouton[1].innerHTML == joueurs[tour] && bouton[2].innerHTML == joueurs[tour]) {

        // on va colorer les cases d'une certaine couleur pour lui indiquer qu'il aura gagner
        bouton[0].backgroundColor = "#006400";
        bouton[1].backgroundColor = "#006400";
        bouton[2].backgroundColor = "#006400";
        return true;

    } else if(bouton[3].innerHTML == joueurs[tour] && bouton[4].innerHTML == joueurs[tour] && bouton[5].innerHTML == joueurs[tour]) {

        bouton[3].backgroundColor = "#006400";
        bouton[4].backgroundColor = "#006400";
        bouton[5].backgroundColor = "#006400";
        return true;

    } else if(bouton[6].innerHTML == joueurs[tour] && bouton[7].innerHTML == joueurs[tour] && bouton[8].innerHTML == joueurs[tour]) {

        bouton[6].backgroundColor = "#006400";
        bouton[7].backgroundColor = "#006400";
        bouton[8].backgroundColor = "#006400";
        return true;
    
      // vainqueur avec les diagonales
    } else if(bouton[0].innerHTML == joueurs[tour] && bouton[4].innerHTML == joueurs[tour] && bouton[8].innerHTML == joueurs[tour]) {

        bouton[0].backgroundColor = "#006400";
        bouton[4].backgroundColor = "#006400";
        bouton[8].backgroundColor = "#006400";
        return true;

    } else if(bouton[2].innerHTML == joueurs[tour] && bouton[4].innerHTML == joueurs[tour] && bouton[6].innerHTML == joueurs[tour]) {

        bouton[2].backgroundColor = "#006400";
        bouton[4].backgroundColor = "#006400";
        bouton[6].backgroundColor = "#006400";
        return true;

      // vainqueur avec les colonnes
    } else if (bouton[0].innerHTML == joueurs[tour] && bouton[3].innerHTML == joueurs[tour] && bouton[6].innerHTML == joueurs[tour]) {

        bouton[0].backgroundColor = "#006400";
        bouton[3].backgroundColor = "#006400";
        bouton[6].backgroundColor = "#006400";
        return true;

    } else if (bouton[1].innerHTML == joueurs[tour] && bouton[4].innerHTML == joueurs[tour] && bouton[7].innerHTML == joueurs[tour]) {

        bouton[1].backgroundColor = "#006400";
        bouton[4].backgroundColor = "#006400";
        bouton[7].backgroundColor = "#006400";
        return true;

    } else if (bouton[2].innerHTML == joueurs[tour] && bouton[5].innerHTML == joueurs[tour] && bouton[8].innerHTML == joueurs[tour]) {

        bouton[2].backgroundColor = "#006400";
        bouton[5].backgroundColor = "#006400";
        bouton[8].backgroundColor = "#006400";
        return true;
    }
}

// Fonction qui va être appeler lors d'un match nul
function matchNul(bouton) {

    // on parcours toutes les cases de la grille du morpion
    for(var i = 0; longueur = bouton.length, i < longueur; i++) {

        // si toutes les cases ne sont pas compléter et/ou disponible
        if(bouton[i].innerHTML.length == 0) {

            return false;

        } else {

            return true;
        }

    }
}

// Variable Afficheur qui va contenir une fonction avec en paramètre l'élement du DOM qui changera de texte en fonction du type de message qui lui sera transmis dedans
var Afficheur = function(element) {

    var affichage = element;

    // Fonction qui va écrire un message à chaque action d'un joueurs et/ou à propos du statut du jeu, exemple dire que c'est au joueur 2 de jouer ou que le joueur 1 à gagner
    function envoyerTexte(message) { 

        affichage.innerHTML = message;
    }
    console.log(message);

    return {

        // on retourne la fonction avec le message correspondant à l'intérieur
        envoyerMessage: envoyerTexte()
    };
};

