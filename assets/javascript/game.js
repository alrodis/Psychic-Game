var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessedLetter = [];


document.onkeyup = function(event) {
    var userGuess = event.key;
    guessedLetter.push(userGuess);
    console.log(userGuess);
    console.log(computerGuess);
    console.log(guessedLetter);


    if (userGuess === computerGuess) {
        wins++;
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessesLeft = 9;
        guessedLetter = [];
    } else if (userGuess !== computerGuess) {
        guessesLeft = guessesLeft - 1;
    }

    if (guessesLeft === 0) {
        losses++;
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessesLeft = 9;
        guessedLetter = [];
    }


    var html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>User Guess: " + guessedLetter + "</p>";



    document.querySelector('#game').innerHTML = html;
}