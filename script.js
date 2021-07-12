const balls = document.querySelectorAll('.ball');
const colors = document.querySelector('#rgb-color');
const scores = document.querySelector('#score');
const answers = document.querySelector('#answer');
const resetBttn = document.querySelector('#reset-game');
const randomColor = Math.floor(Math.random() * 6);
let counter = 0;

resetBttn.addEventListener('click', () => {
  answers.innerText = 'Escolha uma cor.';
  randomBallsColors()
});

function randomBallsColors() {
  let rgb = [];
  for (let i = 0; i < balls.length; i += 1){
    for (let j = 0; j < 3; j += 1) {
      rgb[j] = Math.round(Math.random() * 255);
    }
    balls[i].style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    balls[i].addEventListener('click', resetBttn);
  }
  colors.innerText = balls[randomColor].style.backgroundColor.slice(3);
}
randomBallsColors();

document.addEventListener('click', (event) => {
  if (event.target.className === 'ball'){
    if (colors.innerText === event.target.style.backgroundColor.slice(3)) {
      answers.innerText = 'Acertou';
      counter += 3;
      scores.innerText = counter;
    } else {
      answers.innerText = 'Errou! Tente novamente!';
    }
  }
});

// https://stackoverflow.com/questions/1484506/random-color-generator
// https://www.w3schools.com/jsref/jsref_slice_array.asp