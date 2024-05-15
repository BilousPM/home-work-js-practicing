import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
};

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', 'true');
flatpickr(refs.input, flatpickrOptions);

function onClose(selectedDates) {
  console.log(selectedDates);

  if (selectedDates[0] <= new Date()) {
    Notiflix.Notify.failure('Qui timide rogat docet negare');
    return;
  }

  refs.startBtn.removeAttribute('disabled');
  refs.startBtn.addEventListener('click', hendleStartBtnClick);

  function hendleStartBtnClick() {
    intervalId = setInterval(() => {
      const differentTime = selectedDates[0] - new Date();
      const murkUp = convertMs(differentTime);

      updateClockFaase(murkUp);
      if (differentTime < 1000) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
}

function updateClockFaase({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
