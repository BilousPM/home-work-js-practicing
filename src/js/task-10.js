const refs = {
  boxRef: document.querySelector('#boxes'),
  controls: document.querySelector('#controls'),
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destoryBtn: document.querySelector('button[data-destroy]'),
};

refs.createBtn.addEventListener('click', hendlerClickCreateBtn);
refs.destoryBtn.addEventListener('click', destroyBoxes);

function hendlerClickCreateBtn() {
  const allBoxes = createBoxes(refs.input.value);
  refs.boxRef.append(...allBoxes);
}

function createBoxes(amount) {
  const divBox = [];
  for (let i = 1; i <= amount; i += 1) {
    divBoxRef = document.createElement('div');

    divBoxRef.style.backgroundColor = getRandomHexColor();
    divBoxRef.style.width = `${20 + 10 * i}px`;
    divBoxRef.style.height = `${20 + 10 * i}px`;
    divBox.push(divBoxRef);
  }
  return divBox;
}

function destroyBoxes() {
  refs.boxRef.innerHTML = '';
  refs.input.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
