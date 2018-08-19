// I give up...this is my 5th time rewriting this and I can't get the JS content to show in the HTML. I'll wait for the solution.

// GLOBAL ELEMENTS-------------------------------------------------------------------------------------
// array of states (aka my puzzle options)
var states = ["florida", "montana", "hawaii", "alaska", "texas", "wisconsin", "georgia", "alabama", 
                "oregon", "idaho", "oklahoma", "ohio", "minnesota", "maine", "vermont", "arizona", 
                "louisiana", "tennessee", "massachusetts", "delaware", "nebraska", "utah", "iowa"];

// each round, set:
var wins = 0
var losses = 0
var maxGuesses = 10
var remainingGuesses = 0
var puzzle = []
var ranState;
var guessedLetters = []
var gameStarted = false
var gameEnded = false


// START THE GAME (AND RESTART ROUNDS)----------------------------------------------------------------
var resetGame = function(remainingGuesses = maxGuesses) {
    gameStarted = false;
    //alert("You lose.");
    //document.getElementByID("#scoreboard") = ("Losses: " + losses++);
}


// Randomly choose a word from "states" array and assign it to "ranState"               
var ranState = Math.floor(Math.random() * states.length);
var chosenState = states[ranState];
console.log(chosenState);

// Clear out arrays
guessedLetters = [];
puzzle = [];

// Switch puzzle letters to underscores
for (var i = 0; i < chosenState.length; i++) {
    puzzle.push("_ ");
}


//  Update the display on the HTML Page
function updateDisplay() {
    //document.getElementById("#scoreboard").innerHTML = (Number("Wins: ") + wins++);
    document.getElementByID("#game").innerHTML = "";
    for (var i = 0; i < chosenState; i++) {
        document.getElementByID("#game").innerHTML += ranState[i];
    }
    document.getElementByID("#guesses-left").innerHTML = remainingGuesses;
    document.getElementByID("#guesses").innerHTML = guessedLetters;
};

// The actual game:
// Capture user's key presses
document.onkeyup = function(event) {
    var letter = event.key
    guessedLetters.push(letter);
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            letterInstances(letter);
        }
    }
}

function checkWin() {
    if(puzzle.indexOf("_ ") === -1) {
        alert("You win!")
        document.getElementByID("#scoreboard").innerHTML = ("Wins: " + wins++);
        hasFinished = true;
    }
    else(remainingGuesses <= 0) {
        alert("You lose, try again.");
        document.getElementByID("#scoreboard").innerHTML = ("Losses: " + losses++);
        hasFinished = true;
};


// reset game once finished.
if(gameEnded) {
    resetGame();
    gameEnded = false;
    updateDisplay();
}; 


// Find all instances of the key "letter" 
function letterInstances(letter) {
    // New array "indices" for letters
    var indices = [];
    for (var i = 0; i < chosenState.length; i++) {
        if(chosenState[i] === letter) {
            indices.push(i);
        }
    }

    // if there is nothing in "indices", remove a guess from "remainingGuesses"
    if (indices.length <= 0) {
        remainingGuesses--;
    } else {
        // Loop through all the "indices" and replace the underscores with corresponding letters.
        for(var i = 0; i < indices.length; i++) {
            puzzle[indices[i]] = letter;
        }
    }
};