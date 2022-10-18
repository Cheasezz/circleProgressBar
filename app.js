'use strict';

const inputValue = document.querySelector('.setValue'),
  animateButton = document.querySelector('#switchAnimate'),
  hideButton = document.querySelector('#switchHide'),
  progressBar = document.querySelector('.progress-bar');

let interval;

function changeProgressBar() {
  if (inputValue.value < 0) inputValue.value = 0;
  if (inputValue.value > 100) inputValue.value = 100;
  inputValue.value;

  hideButton.checked = false;
  progressBar.style.opacity = 1;
  let deg = (360 * inputValue.value) / 100 + 180;
  if (inputValue.value >= 50) {
    progressBar.classList.add('over50');
  } else {
    progressBar.classList.remove('over50');
  }
  progressBar.querySelector('.half.rightfield').style.transform = `rotate(${deg}deg)`;
}

function animate() {
	if(animateButton.checked){
  interval = setInterval(() => {
    inputValue.value++;
    if (inputValue.value > 100) inputValue.value = 0;
    changeProgressBar();
  }, 10);
	} else clearInterval(interval);
}

function hide() {
	if(hideButton.checked){
  progressBar.style.opacity = 0;
  animateButton.checked = false;
  clearInterval(interval);
	} else progressBar.style.opacity = 1;
}

inputValue.addEventListener('input', ()=> {
  animateButton.checked = false;
  clearInterval(interval);
  changeProgressBar();
});
animateButton.addEventListener('change', animate);
hideButton.addEventListener('change', hide);
