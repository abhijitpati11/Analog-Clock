// selection all the required data
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');



// we will call a specific function in fixed interval
setInterval(setClock, 1000);

function setClock() {
  const currentDate = new Date();

  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotaion(secondHand, secondsRatio);
  setRotaion(minuteHand, minutesRatio);
  setRotaion(hourHand, hoursRatio);

}

function setRotaion(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock()


