var guessLetters = [];
var secretWord = "KAFFEMASKINE";

function addLetter() {
    let letter = $("#Letter").val().toUpperCase();
    guessLetters.push(letter);
    display();
}

function display() {
    let html = "";
    for (let i = 0; i < secretWord.length; i++) {
        let currentLetter = secretWord[i];
        if (guessLetters.includes(currentLetter)) {
            html += currentLetter;
        } else {
            html += "_";
        }
        html += " ";
    }
    $("#secret-word").html(html);
}

function init() {
    display();
}