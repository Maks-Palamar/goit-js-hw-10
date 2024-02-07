// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector('button');
const daysSelect = document.querySelector('.value[data-days]');
const hoursSelect = document.querySelector('.value[data-hours]');
const minutesSelect = document.querySelector('.value[data-minutes]');
const secondsSelect = document.querySelector('.value[data-seconds]');

let userSelectedDate;
let actualDate = Date.now();
let timer;
let intervalId;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      userSelectedDate = selectedDates[0];
      if (userSelectedDate <= actualDate) {
          iziToast.show({
              message: 'Please choose a date in the future',
              messageColor: '#FF0000',
              position: 'bottomRight',
          })
          return;
      } else {
          startBtn.disabled = false;
      }
  },
};

flatpickr('#datetime-picker', options)


startBtn.addEventListener('click', event => {
    timer = userSelectedDate - Date.now();
    intervalId = setInterval(() => {
        timer -= 1000;
        rightTimeShowcase(convertMs(timer));
        stop(timer);
        console.log(timer);
    }, 1000)
    startBtn.disabled = true;
});

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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function rightTimeShowcase({days, hours, minutes, seconds}) {
    /*const timeStr = `${addLeadingZero(days, hours, minutes, seconds)}`*/
    daysSelect.textContent = `${addLeadingZero(days)}`;
    hoursSelect.textContent = `${addLeadingZero(hours)}`;
    minutesSelect.textContent = `${addLeadingZero(minutes)}`;
    secondsSelect.textContent = `${addLeadingZero(seconds)}`;
    /*console.log(timeStr);*/
}

function addLeadingZero(params) {
    return params.toString().padStart(2, '0');
}

function stop(timer) {
    if (timer <= 1000) {
        clearInterval(intervalId);
    }
}

