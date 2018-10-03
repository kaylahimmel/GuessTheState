// GLOBAL ELEMENTS-------------------------------------------------------------------------------------
// array of states (aka my puzzle options)
var states = ["florida", "montana", "hawaii", "alaska", "texas", "wisconsin", "georgia", "alabama", 
                "oregon", "idaho", "oklahoma", "ohio", "minnesota", "maine", "vermont", "arizona", 
                "louisiana", "tennessee", "arkansas", "delaware", "nebraska", "utah", "iowa"];

// each round, set:
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var puzzle = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var wrongGuesses = [];
var ranState = Math.floor(Math.random() * states.length);
var chosenState = states[ranState];
console.log(chosenState);
    
// Create an array of underscores
var startGame = function() {
    for (var i = 0; i < chosenState.length; i++) {
        puzzle.push("_")
    }
    updateDisplay();

//  Update the display on the HTML Page
function updateDisplay() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("underscore").textContent = puzzle.join(" ");
    document.getElementById("guesses-left").textContent = remainingGuesses;
    document.getElementById("guesses").textContent = guessedLetters.join(", ")
};

// Add wins/losses to the scoreboard area
function checkWin() {
    if(puzzle.indexOf("_") === -1) {
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
            puzzle[i] = letter;
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
        document.getElementById("prompt").textContent = "";
        } else {
        document.getElementById("prompt").textContent = "You've already guessed that letter";
        }
    } else {
    document.getElementById("prompt").textContent = "You've must guess a letter";
    }
    checkWin();
};

// RESET THE GAME
var resetGame = function() {
    remainingGuesses = 10
    puzzle = []
    guessedLetters = []
    ranState();
    startGame();
};