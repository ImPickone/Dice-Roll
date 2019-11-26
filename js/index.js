var name1 = prompt('Player 1 name:');
var name2 = prompt('Player 2 name:');

document.querySelector('.p1').textContent = name1;
document.querySelector('.p2').textContent = name2;

function diceRoll() {
  let randomNumber1 = Math.round(Math.random() * 5 + 1);
  let randomNumber2 = Math.round(Math.random() * 5 + 1);

  let randomPicture1 = `images/dice${randomNumber1}.png`;
  let randomPicture2 = `images/dice${randomNumber2}.png`;

  document.querySelector('.dice1').setAttribute('src', randomPicture1);
  document.querySelector('.dice2').setAttribute('src', randomPicture2);

  let diceSound = new Audio('sounds/roll.mp3');
  diceSound.play();

  // Player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector('.title').textContent = `${name1} Won!`;
    document.querySelector('.title').style.color = '#1abc9c';
    // Draw
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector('.title').textContent = 'Draw!';
    document.querySelector('.title').style.color = '#1abc9c';
    // Player 2 wins
  } else {
    document.querySelector('.title').textContent = `${name2} Won!`;
    document.querySelector('.title').style.color = '#1abc9c';
  }
}

document.querySelector('.button').addEventListener('click', diceRoll);
