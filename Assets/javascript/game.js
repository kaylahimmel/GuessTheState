// GLOBAL ELEMENTS-------------------------------------------------------------------------------------
// array of states (aka my puzzle options)
var states = ["florida", "montana", "hawaii", "alaska", "texas", "wisconsin", "georgia", "alabama", 
                "oregon", "idaho", "oklahoma", "ohio", "minnesota", "maine", "vermont", "arizona", 
                "louisiana", "tennessee", "arkansas", "delaware", "nebraska", "utah", "iowa"];

// each round, set:
var wins = 0;
var losses = 0;
var remainingGuesses = 6;
var currentGame = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var wrongGuesses = [];
var ranState = Math.floor(Math.random() * states.length);
var chosenState = states[ranState];
var startButton = document.getElementById("start");
var howToDiv = document.getElementById("how-to");
var gameDiv = document.getElementById("game");
var puzzleDiv = document.getElementById("puzzle");
var promptDiv = document.getElementById("prompt");


// Create an array of underscores for each puzzle
function startGame() {
    for (var i = 0; i < chosenState.length; i++) {
        currentGame.push("_")
    }
    updateDisplay();
};

    
//  Update the display on the HTML Page
function updateDisplay() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("puzzle").textContent = currentGame.join(" ");
    document.getElementById("guesses-left").textContent = remainingGuesses;
    document.getElementById("guesses").textContent = guessedLetters.join(", ")
};


// Add wins/losses to the scoreboard area
function checkWin() {
    if(currentGame.indexOf("_") === -1) {
        alert("You win!");
        wins++;   
        resetGame();
    } else if (remainingGuesses <= 0) {
        alert("You lose, try again.");
        losses++;
        resetGame();  
    } 
    updateDisplay();
};


// Find all instances of the key "letter" 
function letterInstances(letter) {
    for (var i = 0; i < chosenState.length; i++) {
        if (letter === chosenState[i]) {
            currentGame[i] = letter;
        }
    }
};


// Capture user's key presses
document.onkeyup = function(event) {
    var letter = event.key
    // Checking to see if the user has already guessed a certain letter
    if (alphabet.indexOf(letter) >= 0) {
        if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        letterInstances(letter);
        remainingGuesses--;
        promptDiv.textContent = "";
        } else {
        promptDiv.textContent = "You've already guessed that letter";
        }
    } else {
    promptDiv.textContent = "You must guess a letter";
    }
    checkWin();
};


document.onload = function() {
    howToDiv.style.display = "block";
    gameDiv.style.display = "none";
};

startButton.onclick = function() {
    howToDiv.style.display = "none";
    gameDiv.style.display = "block";
    startGame();
    // startButton.style.disply = "none";
}

// Reset the Game
function resetGame() {
    remainingGuesses = 10
    currentGame = []
    guessedLetters = []
    ranState();
    startGame();
};