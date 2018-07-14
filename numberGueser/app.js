let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * (max - min + 1)),
    guessesLeft = 3;

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(e) {

  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please, enter a number beetwen ${min} and ${max}`, 'red');
  } else {
    if(guess === winningNum){
      gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
      guessesLeft -= 1;
      if(guessesLeft === 0) {
        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
  
      } else {
        guessInput.value = '';
        setMessage(`${guess} is not correct. You have ${guessesLeft} left.`, 'red')
      }
    }
  }

  e.preventDefault();
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
  guessInput.disabled = true;
  won ? guessInput.style.borderColor = 'green' : guessInput.style.borderColor = 'red;'
  won ? message.style.color = 'green' : message.style.color = 'red;'
  setMessage(msg);  

  guessBtn.value = 'Play again';
  guessBtn.className += 'play-again';
}

game.addEventListener('mousedown', function(e) {

  if(e.target.className === 'play-again'){
    window.location.reload();
  }

});