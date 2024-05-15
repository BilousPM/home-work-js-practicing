import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step" ]'),
  amount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
};

let delay = 0;
let position = 0;

refs.form.addEventListener('submit', hendleBtnClick);

function hendleBtnClick(e) {
  e.preventDefault();
  const quantityPromis = Number(refs.amount.value);
  const stepPromis = Number(refs.step.value);
  const firstDelayPromis = Number(refs.delay.value);

  for (let i = 0; i < quantityPromis; i += 1) {
    delay = firstDelayPromis + stepPromis * i;
    position = i + 1;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
