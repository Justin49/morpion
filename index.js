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

// Fonction qui indique si une case est disponible avec le bouton en parmètre
function estDisponible(bouton) {

    console.log(bouton);

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
        bouton[0].style.backgroundColor = "green";
        bouton[1].style.backgroundColor = "green";
        bouton[2].style.backgroundColor = "green";
        return true;

    } else if(bouton[3].innerHTML == joueurs[tour] && bouton[4].innerHTML == joueurs[tour] && bouton[5].innerHTML == joueurs[tour]) {

        bouton[3].style.backgroundColor = "green";
        bouton[4].style.backgroundColor = "green";
        bouton[5].style.backgroundColor = "green";
        return true;

    } else if(bouton[6].innerHTML == joueurs[tour] && bouton[7].innerHTML == joueurs[tour] && bouton[8].innerHTML == joueurs[tour]) {

        bouton[6].style.backgroundColor = "green";
        bouton[7].style.backgroundColor = "green";
        bouton[8].style.backgroundColor = "green";
        return true;
    
      // vainqueur avec les diagonales
    } else if(bouton[0].innerHTML == joueurs[tour] && bouton[4].innerHTML == joueurs[tour] && bouton[8].innerHTML == joueurs[tour]) {

        bouton[0].style.backgroundColor = "green";
        bouton[4].style.backgroundColor = "green";
        bouton[8].style.backgroundColor = "green";
        return true;

    } else if(bouton[2].innerHTML == joueurs[tour] && bouton[4].innerHTML == joueurs[tour] && bouton[6].innerHTML == joueurs[tour]) {

        bouton[2].style.backgroundColor = "green";
        bouton[4].style.backgroundColor = "green";
        bouton[6].style.backgroundColor = "green";
        return true;

      // vainqueur avec les colonnes
    } else if (bouton[0].innerHTML == joueurs[tour] && bouton[3].innerHTML == joueurs[tour] && bouton[6].innerHTML == joueurs[tour]) {

        bouton[0].style.backgroundColor = "green";
        bouton[3].style.backgroundColor = "green";
        bouton[6].style.backgroundColor = "green";
        return true;

    } else if (bouton[1].innerHTML == joueurs[tour] && bouton[4].innerHTML == joueurs[tour] && bouton[7].innerHTML == joueurs[tour]) {

        bouton[1].style.backgroundColor = "green";
        bouton[4].style.backgroundColor = "green";
        bouton[7].style.backgroundColor = "green";
        return true;

    } else if (bouton[2].innerHTML == joueurs[tour] && bouton[5].innerHTML == joueurs[tour] && bouton[8].innerHTML == joueurs[tour]) {

        bouton[2].style.backgroundColor = "green";
        bouton[5].style.backgroundColor = "green";
        bouton[8].style.backgroundColor = "green";
        return true;
    }
}

// Fonction qui va être appeler lors d'un match nul
function matchNul(bouton) {

    // on parcours toutes les cases de la grille du morpion
    for(var i = 0, longueurGrilleMorpion = bouton.length; i < longueurGrilleMorpion; i++) {

        // si toutes les cases ne sont pas compléter et/ou disponible
        if(bouton[i].innerHTML.length == 0) return false;

    }  

    return true;
        

}

window.requestAnimationFrame(boucleDuJeu);

function boucleDuJeu() {

    // Je selectionne les boutons de toute la grille du morpion
    var bouton = document.querySelectorAll("#jeu button");

    // Les 2 joueurs sont représentés par un des symboles suivant, X ou O
    var joueurs = ["X", "O"];

    // Une variable qui va représenter le nombre de tour mis au départ à 0, car on commence au tour 1
    var tour = 0;

    // Une variable boolean qui indique que le jeu est finis ou non, valeur par défault à false
    var jeuEstFini = false;

    // Une variable qui va venir modifier l'état du statut du jeu, par exemple en affichant des messages au joueur
    var afficheur = document.querySelector("#statutDuJeu");

    // Messages
    const gagne = () => `Le joueur ${joueurs[tour]} a gagné`;
    const egalite = () => `Egalité`;
    const tourJoueur = () => `C'est au tour du joueur ${joueurs[tour]}`;
    const caseOccupée = () => `C'est occupée, ${joueurs[tour]} c'est toujours à votre tour`;
    const jeuQuiCommence = () => `Le jeu commence`;

    // On affiche un message comme quoi le jeu est sur le point de commencer
    afficheur.innerHTML = jeuQuiCommence();

    // On parcours la grille du morpion à chaque tour de jeu
    for(var i = 0, longueurGrilleMorpion = bouton.length; i < longueurGrilleMorpion; i++) {

        // On applique un écouteur d'évènement de type click sur toutes les cases de la grille du morpion
        bouton[i].addEventListener("click", function() {

            // Si le jeu n'est pas fini alors on retourne rien
            if(jeuEstFini) return;

            // Si le joueur clique sur une case qui n'est pas disponible alors on affiche un message
            if(!estDisponible(this)) {

                afficheur.innerHTML = caseOccupée();

              // Si la case est disponible, si elle n'à pas encore été prise par l'autre joueur
            } else {

                // Le joueur peut jouer son coup
                mettreSymboleDansCase(this, joueurs[tour]);
                // On affecte le résultat vrai ou faux de recherche un vainqueur à la variable jeuEstFini
                jeuEstFini = rechercherVainqueur(bouton, joueurs, tour);

                // Si le jeu est fini
                if(jeuEstFini) {

                    // On déclare un des deux joueurs gagnant
                    afficheur.innerHTML = gagne();

                    return;
                }

                // Si le match est nul
                if(matchNul(bouton)) {

                    // Il n'y pas de vainqueur
                    afficheur.innerHTML = egalite();

                    return;
                }

                // On incrémente chaque tour de jeu
                tour++;
                // On change à chaque tour de joueur
                tour = tour % 2;

                // On affiche un message pour dire que c'est à un des joueurs de jouer
                afficheur.innerHTML = tourJoueur();
            }
        });
    }


}

