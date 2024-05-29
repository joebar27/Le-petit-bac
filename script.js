function randomLetter() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var mathrandom = Math.random();
    var random = Math.floor(mathrandom * alphabet.length);
    verifLettersFull();
    moveRepeat(random);
}

function moveRepeat(random) {
    var posAiguille = 0;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var targetPos = random * 13.84615384615385;
    var interval = setInterval(moveAiguille, 100);
    var letter = alphabet[random].toUpperCase();
    var aiguille = document.querySelector(".aiguille");

    function moveAiguille() {
        aiguille.style.transform = "rotate(" + posAiguille + "deg)";
        posAiguille += 13.84615384615385;

        if (posAiguille - 0.1 > targetPos) {
            colorLetterChoosen(letter);
            clearInterval(interval);
        }
    }
}

function colorLetterChoosen(letter) {
    var spanElement = window.document.getElementById(letter);
    spanElement.style.color = "red";
    addLetterToArray(letter);
}

let letters = [];

function addLetterToArray(letter) {
    if (letters.includes(letter)) {
        randomLetter();
    } else {
        letters.push(letter); // Ajouter la lettre à la fin du tableau
    }
}

function verifLettersFull() {
    if (letters.length == 26) {
        letters = [];
        console.log("Tableau remis à zéro");
        letterElement = document.querySelectorAll(".segment");
        letterElement.forEach(function (element) {
            element.style.color = "black";
        });
    }
}
