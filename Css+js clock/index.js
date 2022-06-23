
const secondHend = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function satDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60)* 360)+ 90;
    secondHend.style.transform = `rotate(${secondDegrees}deg)`;
    
    const min = now.getMinutes();
    const minDegrees = ((min/ 60)* 360)+ 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;


    const hour = now.getHour();
    const hourDegrees = ((hour/12)* 360)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};
// document.getElementsByClassName(".second-hand").style.transform = `rotate(20deg)`;
  
setInterval(satDate,  1000); 