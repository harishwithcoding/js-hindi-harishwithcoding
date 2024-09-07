let randomNum = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const starOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let pravGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a number");
  }
  else if (guess < 1){
    alert("Please enter a number more then 1");
  }
  else if (guess > 100){
    alert("Please enter a number less then 100");
  }
  else{
    pravGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over. Random number is ${randomNum}`)
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNum){
    displayMessage(`You guessed it right`)
    endGame();
  }
  else if(guess < randomNum){
    displayMessage(`number is To low`)
  }
  else if(guess > randomNum){
    displayMessage(`number is To High`)
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remaning.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput = '';
  userInput.setAttribute('disabled', '')
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame" >Start New Game</h2>`
  starOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNum = parseInt(Math.random()*100 + 1);
    pravGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaning.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    starOver.removeChild(p);
  })
}