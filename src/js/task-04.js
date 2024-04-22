const refs = {
  decrBtnRef: document.querySelector('button[data-action=decrement]'),
  incrBtnRef: document.querySelector('button[data-action=increment]'),
  spanRef: document.querySelector('#value'),
};
let counterValue = 0;

refs.decrBtnRef.addEventListener('click', hendlerClickdecriment);
refs.incrBtnRef.addEventListener('click', hendlerClickincriment);

function hendlerClickdecriment() {
  counterValue -= 1;
  refs.spanRef.textContent = counterValue;
}

function hendlerClickincriment(e) {
  counterValue += 1;
  refs.spanRef.textContent = counterValue;
}
