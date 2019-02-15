var alphabet = 'abcdefghijklmnopqrstuvwxyz';
letterList =  alphabet.split('');
var appLetter = letterList[Math.floor(Math.random() * letterList.length)];
console.log(appLetter);

var userguess = document.getElementById("#userGuesses");
var wins = document.getElementById("#wins");
var losses = document.getElementById("#losses");
// variable for guesses left
var guessLeft = document.getElementById("#numGuesses");

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 9;

document.onkeyup = function(event){
    var x = event.key;
    //userguess.innerHTML = x;
    if(event.key === appLetter){
        winCounter++;
        wins.textContent = winCounter;
    }else if(event.key !== appLetter){
        userguess.textContent.append(event.key);
        guessesLeft = guessesLeft - 1;
        guessLeft.textContent = guessesLeft;
        if (guessLeft.textContent === 0){
            guessesLeft.textContent = 9;
            userguess.textContent = " ";
            lossCounter++;
            losses.textContent = lossCounter;
        }
    }
}
