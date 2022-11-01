let getEl = selector => document.querySelector(selector);
getEl('.start').addEventListener('click', startTimerId);
getEl('.stop').addEventListener('click', stopTimerId);

   function startTimerId() {
    setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        console.log('Start');
    }, 1000);
   } 

function stopTimerId() {
    clearInterval(startTimerId)
    console.log('Stop');
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }