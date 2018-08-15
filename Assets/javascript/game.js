// need to make array of states (maybe do curly brackets with a bunch of arrays like in the ?)
var states = {
    "florida": ["f", "l", "o", "r", "i", "d", "a"],
    "montana": ["m", "o", "n", "t", "a", "n", "a"],
    "hawaii": ["h", "a", "w", "a", "i", "i"]
  };

// link JS to empty div tag with ID of "puzzle".
var start = document.getElementById("puzzle");

// need to assign the first puzzle to play
document.onclick = function(puzzle) {
    var puzzle = states[(Math.floor(Math.random() * states.length) + 1)];

    // need to show user "_ _ _ _" instead of actual answer
    if (states.florida) {
        var displayFL = document.createTextNode("_ ")
        displayFL.textContent = florida[i];
    }
}



// need to assign key events to listen for user's typed options
document.onkeyup = function(event) {
    var userGuess = event.key;


// need to assign .Lowercase to make sure game still works if user tries to capitalize letters using shift or caps lock
document.onkeyup = function(event) {
    var validKeys = ['h', 'd', 'w', 't']
    var keyMap = {
      h: 'honk',
      d: 'driveToWork',
      w: 'driveAroundWorld',
      t: 'getTuneUp'
    }
    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = event.key.toLowerCase()

    if (validKeys.includes(letter)) {
      var methodName = keyMap[letter]

      car[methodName]()
      displayStats(car)
    }    

    // Or with a variable that matches the name of the property
    var guessState = "";
    var blanks = states[guessState];
    alert("_ " + blanks + " years!");
  }


// need counter that counts down from 12 the number of wrong guesses that resets with every puzzle


// need to display the letters already guessed (and make sure if they hit the same keys again, it doesn't count against the # of wrong guesses)
// (this should also reset every puzzle)


// need counter that keeps track of wins and losses. it should NOT reset with every puzzle.
// (maybe this needs to be in it's one container? check out rpsgame code.)
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

// need to add prompts that say whether the user won or lost that round

// need the next round to start as soon as the user closes the propmt

// if using music, need to figure out how to assign it (and where it goes) 