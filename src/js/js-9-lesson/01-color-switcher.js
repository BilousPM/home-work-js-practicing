const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', hendleStartBtnClick);
stopBtnRef.addEventListener('click', hendleStopBtnClick);

let intervalId = null;

function hendleStartBtnClick() {
  startBtnRef.setAttribute('disabled', 'true');
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function hendleStopBtnClick() {
  startBtnRef.removeAttribute('disabled');
  clearInterval(intervalId);
}

function addBgcPageBody() {}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
