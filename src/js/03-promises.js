import Notiflix from 'notiflix';

getEl = selector => document.querySelector(selector);
getEl('.form').addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

function onSubmit(event) {
  event.preventDefault();

  let firstDelay = Number(getEl('input[name="delay"]'));
  let stepDelay = Number(getEl('input[name="step"]'));
  let amountDelay = Number(getEl('input[name="amount"]'));

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
