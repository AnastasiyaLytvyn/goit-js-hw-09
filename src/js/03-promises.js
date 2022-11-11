import Notiflix from 'notiflix';

getEl = selector => document.querySelector(selector);
getEl('.form').addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();

  let firstDelay = Number(getEl('input[name="delay"]').value);
  let stepDelay = Number(getEl('input[name="step"]').value);
  let amountDelay = Number(getEl('input[name="amount"]').value);

  for (let i = 1; i <= amountDelay; i += 1) {
    createPromise(i, firstDelay)
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
    firstDelay += stepDelay;
  }
}
