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

const flip = {}

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
 const newYear = new Date(2021, 00, 01, 00, 00, 00);
 const milliseconds = newYear - todaysDate;
 const remainingTime = timeLeft(milliseconds);
 
 secondsTop.textContent = `${remainingTime.seconds < 10 ? '0' : ''}${remainingTime.seconds}`;
 secondsBack.textContent = `${remainingTime.seconds < 10 ? '0' : ''}${remainingTime.seconds}`;
 
 minutesTop.textContent = `${remainingTime.minutes < 10 ? '0' : ''}${remainingTime.minutes}`;
 minutesBack.textContent = `${remainingTime.minutes < 10 ? '0' : ''}${remainingTime.minutes}`;
 
 hoursTop.textContent = `${remainingTime.hours < 10 ? '0' : ''}${remainingTime.hours}`;
 hoursBack.textContent = `${remainingTime.hours < 10 ? '0' : ''}${remainingTime.hours}`;
 
 daysTop.textContent = `${remainingTime.days < 10 ? '0' : ''}${remainingTime.days}`;
 daysBack.textContent = `${remainingTime.days < 10 ? '0' : ''}${remainingTime.days}`;
 
 cards[3].classList.add('flip');
 remainingTime.seconds == 59 ? cards[2].classList.add('flip') : '';
 remainingTime.minutes == 59 && remainingTime.seconds == 59 ? cards[1].classList.add('flip') : '';
 remainingTime.hours == 23 && remainingTime.seconds == 59 ? cards[0].classList.add('flip') : '';
 
 clearTimeout(flip.timeout);
 
 flip.timeout = setTimeout(() => {
  secondsBottom.textContent = `${remainingTime.seconds < 10 ? '0' : ''}${remainingTime.seconds}`;
  secondsFront.textContent = `${remainingTime.seconds < 10 ? '0' : ''}${remainingTime.seconds}`;
  
  minutesBottom.textContent = `${remainingTime.minutes < 10 ? '0' : ''}${remainingTime.minutes}`;
  minutesFront.textContent = `${remainingTime.minutes < 10 ? '0' : ''}${remainingTime.minutes}`;

  hoursBottom.textContent = `${remainingTime.hours < 10 ? '0' : ''}${remainingTime.hours}`;
  hoursFront.textContent = `${remainingTime.hours < 10 ? '0' : ''}${remainingTime.hours}`;

  daysBottom.textContent = `${remainingTime.days < 10 ? '0' : ''}${remainingTime.days}`;
  daysFront.textContent = `${remainingTime.days < 10 ? '0' : ''}${remainingTime.days}`;
   
  cards.forEach(card => card.classList.remove('flip'));
 }, 600);
}

setInterval(() => {
 updateCards();
}, 1000);

updateCards();
