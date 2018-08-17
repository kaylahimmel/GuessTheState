// need to make an array of states (maybe use curly brackets with a bunch of arrays)
var states = {
    "florida": ["f", "l", "o", "r", "i", "d", "a"],
    "montana": ["m", "o", "n", "t", "a", "n", "a"],
    "hawaii": ["h", "a", "w", "a", "i", "i"]
};

// link JS to empty div tags with IDs in the index.html page.
var newRoundDiv = document.getElementByClassName("right-guesses");
    newRoundDiv.textContent = states
        if states.florida {
            var blankFL = document.createTextNode("_ ");
            blankFL.textContent = states.florida.length;
        
        if states.montana {
            var blankMT = document.createTextNode("_ ");
            blankMT.textContent = states.montana.length;

        if states.hawaii {
            var blankHI = document.createTextNode("_ ");
            blankHI.textContent = states.hawaii.length;        
}



var wrongLetterDiv = document.getElementByClassName("wrong-guesses");
var scoreChangeDiv = document.getElementByClassName("scoreboard");


// need to assign the first puzzle to play
document.onfocus = function(puzzle) {
    var puzzle = states
    [(Math.floor(Math.random() * states.length];


// need to assign .Lowercase to make sure game still works if user tries to capitalize letters using shift or caps lock


// need counter that counts down from 12 the number of wrong guesses that resets with every puzzle


// need to display the letters already guessed (and make sure if they hit the same keys again, it doesn't count against the # of wrong guesses)
// (this should also reset every puzzle)


// need counter that keeps track of wins and losses. it should NOT reset with every puzzle.
// (maybe this needs to be in it's one container? check out rpsgame code.)
// link JS to empty div tag with ID of "score".
var score = document.getElementByClassName("scoreboard");
var wins = 0;
var losses = 0;
var guesses = 12;


// need to assign key events to listen for user's typed options
document.onkeyup = function(guesses) {
    var guesses = this.onkeyup--;

var computerChoice = states[Math.floor(Math.random() * states.length)];

console.log(computerChoice)


if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

    if ((userGuess === "r") && (computerGuess === "s")) {
      wins++;
    } else if ((userGuess === "r") && (computerGuess === "p")) {
      losses++;
    } else if ((userGuess === "s") && (computerGuess === "r")) {
      losses++;
    } else if ((userGuess === "s") && (computerGuess === "p")) {
      wins++;
    } else if ((userGuess === "p") && (computerGuess === "r")) {
      wins++;
    } else if ((userGuess === "p") && (computerGuess === "s")) {
      losses++;
    } else if (userGuess === computerGuess) {
      ties++;
    }

    document.onkeypress = function(event) {
        var userGuess = event.key;
    
        if(userGuess === computerChoice){
            wins++;
        }else{
            guesses--;
        }
    
        if(guesses === 0){
            losses++
        }
    
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "losses: " + losses;
        document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    
    }


// need to add prompts that say whether the user won or lost that round


// need the next round to start as soon as the user closes the propmt


// if using music, need to figure out how to assign it (and where it goes) 