var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var letterList =  alphabet.split('');

var userguess = document.getElementById("userGuesses");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessLeft = document.getElementById("numGuesses");

var winCounter = 0;
var lossCounter = 0;
var guessCounter = 9;
var guessArray = [];

document.onkeyup = function(event){
    var appLetter = letterList[Math.floor(Math.random() * letterList.length)];

    if(event.key === appLetter){
        winCounter++;
        wins.textContent = winCounter;
        guessCounter = 9;
        guessArray = [];
        guessLeft.textContent = 9;
        userguess.textContent = " ";
    }else if(event.key !== appLetter){
        guessArray.push(event.key);
        userguess.textContent = guessArray;
        guessCounter = guessCounter - 1;
        guessLeft.textContent = guessCounter;
        //guessLeft.textContent = ;
        if (guessCounter === 0){
            guessCounter = 9;
            guessArray = [];
            guessLeft.textContent = 9;
            userguess.textContent = " ";
            lossCounter++;
            losses.textContent = lossCounter;
        }
    }
}
