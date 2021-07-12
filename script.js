const colors = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const answers = document.querySelector('#answer');
const resetBttn = document.querySelector('#reset-game');

const colors = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const answers = document.querySelector('#answer');
const resetBttn = document.querySelector('#reset-game');

function randomColors() {
  let rgb = [];
  for (let i = 0; i < balls.length; i += 1){
    for (let j = 0; j < 3; j += 1) {
      rgb[j] = Math.round(Math.random() * 255);
    }
    balls[i].style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
  }
}
randomColors();