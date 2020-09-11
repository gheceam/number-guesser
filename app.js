const numberOfGuesses = 3;
const minNum = 1;
const maxNum = 20;
const game = document.querySelector('#game p');
const guessInput = document.getElementById('guess-input');
const guessValue = document.getElementById('guess-value');
const message = document.querySelector('.message');

setupGame();
startGame();

// setup game
function setupGame(){
  guessValue.addEventListener('click',verifyGuess);
  
}
// start game
function startGame(){
  
  const numberToGuess = Math.floor(Math.random() * maxNum) + minNum;
  message.style.display = 'none';

  game.textContent = `Guess a number between ${minNum} and ${maxNum} `;

  for(x = 0; x < numberOfGuesses; x++){
    if(guessInput === numberToGuess){
      message.textContent = 'Yes! The correct number was: ' + numberToGuess;
      break;
    }
    else{
      message.style.display = 'block';
      message.textContent = `That was not correct! You have ${x} out of ${numberOfGuesses} left.`
    }
  }
  
}
