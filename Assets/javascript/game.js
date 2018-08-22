// GLOBAL ELEMENTS-------------------------------------------------------------------------------------
// array of states (aka my puzzle options)
var states = ["florida", "montana", "hawaii", "alaska", "texas", "wisconsin", "georgia", "alabama", 
                "oregon", "idaho", "oklahoma", "ohio", "minnesota", "maine", "vermont", "arizona", 
                "louisiana", "tennessee", "massachusetts", "delaware", "nebraska", "utah", "iowa"];

// each round, set:
var wins = 0
var losses = 0
var remainingGuesses = 10
var puzzle = []
var ranState;
var guessedLetters = []
var ranState = Math.floor(Math.random() * states.length);
var chosenState = states[ranState];
console.log(chosenState);


// START THE GAME (AND RESTART ROUNDS)----------------------------------------------------------------
var startGame = function() {
    // Create our array of underscores
    for (var i = 0; i < chosenState.length; i++) {
        puzzle.push("_")
    }

    console.log(chosenState.length)
    console.log(puzzle.length)

    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("underscore").textContent = puzzle.join(" ");
    console.log("Game is started")
}


// RESET THE GAME-------------------------------------------------------------------------------------
var resetGame = function(remainingGuesses = maxGuesses) {
    gameStarted = false;
}


//  Update the display on the HTML Page
function updateDisplay() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("underscore").textContent = puzzle.join(" ");
};

// THE ACTUAL GAME
// Capture user's key presses
document.onkeyup = function(event) {
    var letter = event.key
    // Checking to see if the user has already guessed a certain letter
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        letterInstances(letter);
    }
    checkWin();
}

// The scoreboard
function checkWin() {
    console.log(puzzle)
    if(puzzle.indexOf("_") === -1) {
        alert("You win!")
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

// Start the game
startGame();