var enterButton = document.getElementById('enterButton');
var restartButton = document.getElementById('restartButton');
var output = document.getElementById('outputText');
var direction = document.getElementById('direction');
var guessNum = document.getElementById('guessNum');
var guess = 8;

guessNum.innerHTML="Number of Guess : " + guess;

var randomNumber = Math.ceil(Math.random()*100);

function checkNumber () {
    var input = document.getElementById('userInput').value;
    if (input==randomNumber){
        output.innerHTML=randomNumber;
        direction.innerHTML="You guessed it right!";
         direction.style.color="#03AC13";
    } else if (input>randomNumber && input<100) {
        direction.innerHTML="You guessed too high.";
        direction.style.color="red";
        checkGuess()
        guessCheck();
    } else if (input<randomNumber && input>1) {
        direction.innerHTML="You guessed too low.";
        direction.style.color="red";
        checkGuess()
        guessCheck();
    } else if (input<1) {
        direction.innerHTML="Higher, it has to be between 1 and 100.";
        direction.style.color="red";
        checkGuess()
        guessCheck();
    } else if (isNaN(input)) {
        direction.innerHTML="That's not a number.";
        direction.style.color="red";
        checkGuess()
        guessCheck();
    } else {
        direction.innerHTML="Lower, it has to be between 1 and 100."
        direction.style.color="red";
        checkGuess()
        guessCheck();
    }
}

function guessCheck() {
    if (guess==0) {
        guessNum.innerHTML="Game Over";
        guessNum.style.color="red";
        enterButton.disabled = true
        output.innerHTML=randomNumber;
        direction.innerHTML=" ";
        setTimeout ( function(){
            location.reload();
        }, 3000);
    }
}

function checkGuess() {
    guess--
    guessNum.innerHTML="Number of Guess : " + guess
}

enterButton.addEventListener('click', checkNumber);

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      enterButton.click();
    }
  });

restartButton.addEventListener('click', function(){
    location.reload();
})

document.addEventListener("keypress", function(event) {
    if(event.key === "r" || event.key === "R") {
        restartButton.click();
    }
});
