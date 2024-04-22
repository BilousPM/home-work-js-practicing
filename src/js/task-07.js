const inputRef = document.querySelector('#font-size-control');
const outputRef = document.querySelector('#text');

outputRef.style.fontSize = `${inputRef.value}px`;
inputRef.addEventListener('input', hendleInputReng);

function hendleInputReng(e) {
  outputRef.style.fontSize = `${e.target.value}px`;
}
