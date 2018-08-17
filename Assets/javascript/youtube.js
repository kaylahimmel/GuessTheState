// need to make an array of states (maybe use curly brackets with a bunch of arrays)
var states = ["florida", 
                "montana", 
                "hawaii"
                ];

//choose word from array randomly               

var randIndex = Math.floor(Math.random() * states.length);
var chosenState = states[randIndex];

//create an empty array to hold the number of underscores needed per array word
var underScore = [];

console.log(chosenState);

// create underscores based on length of word
for (var i = 0; i < chosenState.length; i++) {
    underScore.push("_ ");
    }      
    console.log(underScore);

// capture the user's guess
document.onkeyup = function(event) {
    letter = event.key.toLowerCase();
    underScore.push(letter);

    var keyCode = event.keyCode;
    var keyWord = String.fromCharCode(keyCode);

};


//tutorial's code
console.log(generate)