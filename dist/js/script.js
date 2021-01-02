const cards = document.querySelectorAll('.timer-card__card');

const daysTop = document.querySelector('.days-top');
const daysBack = document.querySelector('.days-back');
const daysFront = document.querySelector('.days-front');
const daysBottom = document.querySelector('.days-bottom');

const hoursTop = document.querySelector('.hours-top');
const hoursBack = document.querySelector('.hours-back');
const hoursFront = document.querySelector('.hours-front');
const hoursBottom = document.querySelector('.hours-bottom');

const minutesTop = document.querySelector('.minutes-top');
const minutesBack = document.querySelector('.minutes-back');
const minutesFront = document.querySelector('.minutes-front');
const minutesBottom = document.querySelector('.minutes-bottom');

const secondsTop = document.querySelector('.seconds-top');
const secondsBack = document.querySelector('.seconds-back');
const secondsFront = document.querySelector('.seconds-front');
const secondsBottom = document.querySelector('.seconds-bottom');

const flip = {};

function timeLeft(ms){
 days = Math.floor(ms / (24*60*60*1000));
 daysms = ms % (24*60*60*1000);
 hours = Math.floor((daysms)/(60*60*1000));
 hoursms = ms % (60*60*1000);
 minutes = Math.floor((hoursms)/(60*1000));
 minutesms = ms % (60*1000);
 seconds = Math.floor((minutesms)/(1000));
 return {days,hours,minutes,seconds};
}

function updateCards() {
 const todaysDate = new Date();
 const newYear = new Date(2021, 00, 00, 00, 00, 00);
 flip.milliseconds = newYear - todaysDate;
 flip.remainingTime = timeLeft(flip.milliseconds);

 if (flip.milliseconds <= 0) {
  clearInterval(flip.interval);
  return;
 }

 secondsTop.textContent = `${flip.remainingTime.seconds < 10 ? '0' : ''}${flip.remainingTime.seconds}`;
 secondsBack.textContent = `${flip.remainingTime.seconds < 10 ? '0' : ''}${flip.remainingTime.seconds}`;
 
 minutesTop.textContent = `${flip.remainingTime.minutes < 10 ? '0' : ''}${flip.remainingTime.minutes}`;
 minutesBack.textContent = `${flip.remainingTime.minutes < 10 ? '0' : ''}${flip.remainingTime.minutes}`;
 
 hoursTop.textContent = `${flip.remainingTime.hours < 10 ? '0' : ''}${flip.remainingTime.hours}`;
 hoursBack.textContent = `${flip.remainingTime.hours < 10 ? '0' : ''}${flip.remainingTime.hours}`;
 
 daysTop.textContent = `${flip.remainingTime.days < 10 ? '0' : ''}${flip.remainingTime.days}`;
 daysBack.textContent = `${flip.remainingTime.days < 10 ? '0' : ''}${flip.remainingTime.days}`;
 
 cards[3].classList.add('flip');
 flip.remainingTime.seconds == 59 ? cards[2].classList.add('flip') : '';
 flip.remainingTime.minutes == 59 && flip.remainingTime.seconds == 59 ? cards[1].classList.add('flip') : '';
 flip.remainingTime.hours == 23 && flip.remainingTime.minutes == 59 && flip.remainingTime.seconds == 59 ? cards[0].classList.add('flip') : '';
 
 clearTimeout(flip.timeout);
 
 flip.timeout = setTimeout(() => {
  secondsBottom.textContent = `${flip.remainingTime.seconds < 10 ? '0' : ''}${flip.remainingTime.seconds}`;
  secondsFront.textContent = `${flip.remainingTime.seconds < 10 ? '0' : ''}${flip.remainingTime.seconds}`;
  
  minutesBottom.textContent = `${flip.remainingTime.minutes < 10 ? '0' : ''}${flip.remainingTime.minutes}`;
  minutesFront.textContent = `${flip.remainingTime.minutes < 10 ? '0' : ''}${flip.remainingTime.minutes}`;

  hoursBottom.textContent = `${flip.remainingTime.hours < 10 ? '0' : ''}${flip.remainingTime.hours}`;
  hoursFront.textContent = `${flip.remainingTime.hours < 10 ? '0' : ''}${flip.remainingTime.hours}`;

  daysBottom.textContent = `${flip.remainingTime.days < 10 ? '0' : ''}${flip.remainingTime.days}`;
  daysFront.textContent = `${flip.remainingTime.days < 10 ? '0' : ''}${flip.remainingTime.days}`;
   
  cards.forEach(card => card.classList.remove('flip'));
 }, 600);
}

flip.interval = setInterval(() => {
 updateCards();
}, 1000);

updateCards();

