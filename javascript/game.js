//creating alphabet array
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

//var that picks a random letter
var theRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

//vars for wins, losses, guesses left, and an array to keep guesses that the user picked
var wins = 0;
var losses = 0;
var numberOfGuesses = 10;
var guesses = [];

//setting html based on html id's
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("left").innerHTML = "Guesses left: " + numberOfGuesses;
document.getElementById("guesses").innerHTML = 'Your guesses so far: ' + guesses;


// document.onkeyup = function(event) {
//     userText.textContent = event.key;
//   };
//OR
//document.addEventListener('keydown', function(event) {
//});

document.onkeyup = function(event) {
    //Function to update the Display after each key stroke.
    function updateDisplay() {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("left").innerHTML = "Guesses left: " + numberOfGuesses;
    document.getElementById("guesses").innerHTML = 'Your guesses so far: ' + guesses;
    }

    var x = event.key;
    console.log("Random letter is: " + theRandomLetter);
    console.log(x);

    // If statement to see if the user has any guesses left
    if(numberOfGuesses > 0) {
        //If their keystroke equals the random letter, they win.
        //Inside this if statement, we update the wins, guesses, #ofguesses, and the random letter.
        //lastley, we update the display
        if (x == theRandomLetter) {
            wins++;
            guesses = [];
            numberOfGuesses = 10;
            theRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            updateDisplay();

        }
        //else, we know that they didn't guess the right letter
        //push the guesses to the guess array (to display guesses)
        //minus 1 guess to the #ofGuesses
        //lasetly, we update the display.
        else {
            guesses.push(x);
            numberOfGuesses--;
            updateDisplay();

        }
    }
    //else, we know that the user is outof guesses and they didn't guess the right letter.
    //update losses, guessses, and #of guesss
    //lastely, we update the display. 
    else{
        losses++;
        guesses = [];
        numberOfGuesses = 10;
        updateDisplay();
    }

};





