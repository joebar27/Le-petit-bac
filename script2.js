var alphabet = alphabetInit();
var removedLetters = []; // Nouveau tableau pour stocker les lettres supprimées

var alphabetTarget = {
    A: 0,
    B: 13.84615384615385,
    C: 27.6923076923077,
    D: 41.5384615384615,
    E: 55.3846153846154,
    F: 69.2307692307692,
    G: 83.0769230769231,
    H: 96.9230769230769,
    I: 110.769230769231,
    J: 124.615384615385,
    K: 138.461538461538,
    L: 152.307692307692,
    M: 166.153846153846,
    N: 180,
    O: 193.846153846154,
    P: 207.692307692308,
    Q: 221.538461538462,
    R: 235.384615384615,
    S: 249.230769230769,
    T: 263.076923076923,
    U: 276.923076923077,
    V: 290.769230769231,
    W: 304.615384615385,
    X: 318.461538461538,
    Y: 332.307692307692,
    Z: 346.153846153846,
};

// Fonction d'initialisation du tableau alphabet
function alphabetInit() {
    alphabet = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    var letterElement = document.querySelectorAll(".segment");
    letterElement.forEach(function (element) {
        element.style.color = "black";
    });
    console.log("Tableau remis à zéro");
    return alphabet;
}

// Fonction activée par le bouton "Lancer la roulette"
async function randomLetter() {
    verifAlphabetIsVoid();
    recolorRemovedLetters(); // Recolorer les lettres supprimées en blanc
    await fullTurn(); // Attendre que fullTurn soit terminé
    var mathrandom = Math.random();
    var random = Math.floor(mathrandom * alphabet.length);
    var letter = alphabet[random].toUpperCase();
    console.log("Lettre choisie:", letter);
    moveAiguille(letter);
}

// Fonction de déplacement de l'aiguille
function moveAiguille(letter) {
    var posAiguille = 0;
    var targetPos = alphabetTarget[letter];
    var interval = setInterval(move, 4);
    var aiguille = document.querySelector(".aiguille");

    function move() {
        aiguille.style.transform = "rotate(" + posAiguille + "deg)";
        posAiguille += 1;
        if (posAiguille - 0.1 > targetPos) {
            colorLetterChoosen(letter);
            clearInterval(interval);
        }
    }
}

// Fonction de coloration de la lettre choisie
function colorLetterChoosen(letter) {
    var spanElement = window.document.getElementById(letter);
    spanElement.style.color = "#93e5b9";
    spanElement.style.textShadow = "4px -4px 4px #93e5b9";
    removeLetterFromArray(letter);
}

// Fonction de suppression de la lettre choisie dans le tableau alphabet
function removeLetterFromArray(letter) {
    let index = alphabet.indexOf(letter);
    if (index !== -1) {
        alphabet.splice(index, 1);
        removedLetters.push(letter); // Ajouter la lettre au tableau des lettres supprimées
    }
}

// Fonction de vérification si le tableau alphabet est vide
function verifAlphabetIsVoid() {
    if (alphabet.length == 0) {
        alphabetInit();
        removedLetters = []; // Réinitialiser le tableau des lettres supprimées
    } else {
        console.log("Tableau alphabet restant:", alphabet);
    }
}

// Fonction pour faire tourner l'aiguille de 360°
function fullTurn() {
    return new Promise((resolve) => {
        console.log("Commence un tour complet");
        var initAiguille = 0;
        var interval = setInterval(movefull, 20);
        var aiguille = document.querySelector(".aiguille");

        function movefull() {
            aiguille.style.transform = "rotate(" + initAiguille + "deg)";
            initAiguille += 5;
            if (initAiguille > 360) {
                clearInterval(interval);
                resolve(); // Résoudre la promesse une fois le tour complet terminé
            }
        }
    });
}

// Nouvelle fonction pour recolorer les lettres supprimées en blanc
function recolorRemovedLetters() {
    removedLetters.forEach(letter => {
        var spanElement = window.document.getElementById(letter);
        spanElement.style.color = "rebeccapurple";
        spanElement.style.textShadow = "5px 5px 5px rgba(0, 0, 0, 0.5)";
    });
}
