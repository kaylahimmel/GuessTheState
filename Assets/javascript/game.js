// need to make an array of states (maybe use curly brackets with a bunch of arrays)
var states = ["florida", "montana", "hawaii", "alaska", "texas", "wisconsin", "georgia", "alabama", 
                "oregon", "idaho", "oklahoma", "ohio", "minnesota", "maine", "vermont", "arizona", 
                "louisiana", "tennessee", "massachusetts", "delaware", "nebraska", "utah", "iowa"];

//choose word from array randomly               
var ranState = Math.floor(Math.random() * states.length);
var chosenState = states[ranState];

//create an empty arrays to hold the number of underscores needed per array word as well as right and wrong guesses
var underScore = [];
var wrongGuess = [];

// send content to the DOM
var underScoreDiv = document.getElementsByClassName("underScore");
var wrongGuessDiv = document.getElementsByClassName("wrongGuess");


// create underscores based on length of word
makeUnderScore = () => {
    for (var i = 0; i < chosenState.length; i++) {
    underScore.push("_ ");
}
return underScore;
}

// for (var i = 0; i < chosenState.length; i++) {
//         underScore.push("_ ");
//     };

    //test to see if underScore loop pushes the correct number of "_" for each state in the array
    console.log(underScore);
  
    // capture the user's guess
    document.getElementById.onkeyup = function(event) {
        var keyWord = event.key.toLowerCase();
        var keyWord = String.fromCharCode(keyCode);
    // action to take if user guesses correctly
        if (chosenState.indexOf(keyWord) > -1) {
            // display correct letter to user instead of the "_"
            underScore[chosenState.indexOf(keyWord)] = keyWord;
            underScoreDiv[0].innerHTML = underScore.join(" ");
            // within the keyWord, check to see if all "_" are filled correctly: 
            if (underScore.join(" ") == chosenState) {
                alert("You win");
            }
        }
        // action to take if user guesses wrong
        else {
            wrongGuess.push(keyWord);
            wrongGuessDiv[0].innerHTML = wrongGuess;

        }
    }
    
    // document.getElementsByClassName("underscores").innerHTML = underScore.join(" ");
    // keep track of score
    var score = document.getElementByClassName("scoreboard").innerHTML = wins +
    var wins = 0;
    var losses = 0;
    var guesses = 12;