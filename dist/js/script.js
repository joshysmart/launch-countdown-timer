const daysCard = document.querySelector('.days');
const hoursCard = document.querySelector('.hours');
const minutesCard = document.querySelector('.minutes');
const secondsCard = document.querySelector('.seconds');
const prevSecond = document.querySelector('.prev-second');

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

 daysCard.textContent = `${remainingTime.days < 10 ? '0' : ''}${remainingTime.days}`;
 hoursCard.textContent = `${remainingTime.hours < 10 ? '0' : ''}${remainingTime.hours}`;
 minutesCard.textContent = `${remainingTime.minutes < 10 ? '0' : ''}${remainingTime.minutes}`;
 secondsCard.textContent = `${remainingTime.seconds < 10 ? '0' : ''}${remainingTime.seconds}`;

 prevSecond.textContent = `${remainingTime.seconds < 10 ? '0' : ''}${remainingTime.seconds}`;
}

setInterval(() => {
 updateCards();
}, 1000);

updateCards();
