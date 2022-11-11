import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let getEl = selector => document.querySelector(selector);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = Date.now();
    if (selectedDates[0] <= currentDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      getEl('[data-start]').setAttribute('disabled', 'disabled');
    } else {
      getEl('[data-start]').removeAttribute('disabled', 'disabled');
    }
  },
};

const calendar = flatpickr("#datetime-picker", options);

getEl('[data-start]').addEventListener('click', clickStart);

class Timer {
    constructor({update}) {
        this.interval = null;
        this.isActive = false;
        this.update = update;
    }

    addLeadingZero(value) {
    return String(value).padStart(2, "0");
    };

    convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = this.addLeadingZero(Math.floor(ms / day));
        const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
        const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
        const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

        return { days, hours, minutes, seconds };
    };

    start() {
        if (this.isActive) {
            return;
        }
        const startTime = calendar.selectedDates[0];
        this.isActive = true;

        this.interval = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const time = this.convertMs(deltaTime);
            this.update(time);
            console.log(time);
            
            if (deltaTime < 1000) {
                clearInterval(this.interval);
                this.isActive = false;
        };
    }, 1000);
    };
};

const timer = new Timer({
    update: updateTime,
});

function clickStart() {
    timer.start();
}; 

function updateTime({ days, hours, minutes, seconds }) {
    getEl('[data-days]').textContent = `${days}`;
    getEl('[data-hours]').textContent = `${hours}`;
    getEl('[data-minutes]').textContent = `${minutes}`;
    getEl('[data-seconds]').textContent = `${seconds}`;
}; 