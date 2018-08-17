// need to make an array of states (maybe use curly brackets with a bunch of arrays)
var states = ["florida", 
                "montana", 
                "hawaii"
                ];
var letter = ""

var guesses = []


// store user key strokes
document.onkeyup = function(event){
    letter = event.key.toLowerCase();
    guesses.push(letter)


//Choose puzzle
var letter = state[(Math.floor(Math.random() * states.length];
// loop through every letter in the game and replace every letter with an underscore, (don't use code below, make for loop)

// only use this if statement at the beginning of each round
if ()
newRoundDiv.createElement = ("p");
puzzleDiv.textContent = (("_ ") * states[i]);
newRoundDiv.appendChild(puzzleDiv);

// add else statement that replaces the guess exactly in the underscore vs index

// use if statements to check to see if there are underscores remaining (0 = win), and if there are guess left (0=lose)
// updated wins, losses, and update html with this

//reset guesses and start new puzzle