// need to make an array of states (maybe use curly brackets with a bunch of arrays)
var states = ["florida", 
                "montana", 
                "hawaii"
                ];
var letter = ""

var guesses = []

var underscore = ("_ ")


// store user key strokes
document.onkeyup = function(event) {
    letter = event.key.toLowerCase();
    guesses.push(letter)


//Choose word puzzle
var word = state[(Math.floor(Math.random() * states.length];

var game = word.length;


// loop through every letter in the game and replace every letter with an underscore, (don't use code below, make for loop)
for (var i = 0; i < states.word.length; i++) {
    this.textContent(underscore) * game[i]);
    console.log(states.game[]); }
}

// only use an if statement at the beginning of each game
var game = document.getElementByClassName("right-guesses");
    game.textContent = states
        if word = "florida" {
            
} 


// add else statement that replaces the guess exactly in the underscore vs index


// use if statements to check to see if there are underscores remaining in puzzle (0 = win), and if there are no guesses left (0=lose)
// updated wins, losses, and update html with this


//reset guesses and start new puzzle