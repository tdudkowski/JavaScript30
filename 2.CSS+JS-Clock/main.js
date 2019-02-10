 const eClock = document.querySelector('.eclock');
  const secondHand = document.querySelector('.seconds');
  const minutesHand = document.querySelector('.minutes');
  const hoursHand = document.querySelector('.hours');

  const clockMove = () => {
   const now = new Date();
   let seconds = now.getSeconds();
   let minutes = now.getMinutes();
   let hours = now.getHours();
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   const minutesDegrees = ((minutes / 60) * 360) + 90;
   minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
   const hoursDegrees = ((hours / 60) * 360);
   hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
   if (seconds < 10) {
    seconds = `0${seconds}`;
   }
   if (minutes < 10) {
    minutes = `0${minutes}`;
   }
   if (hours < 10) {
    hours = `0${hours}`;
   }
   eClock.textContent = `${hours}:${minutes}:${seconds}`;
   console.log(seconds, minutes, hours);
  }

  setInterval(clockMove, 1000);
