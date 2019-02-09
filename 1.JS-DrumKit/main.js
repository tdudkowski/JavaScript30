const keys = document.querySelectorAll('ul li');
const howMany = document.querySelectorAll('ul li').length;
const showKey = document.querySelector('span');
const btnStart = document.querySelector('button.start');
const btnStop = document.querySelector('button.stop');

flag = false;

function playSound(e) {
 // for (let i = 0; i < keys.length; i++) {
 //  const x = keys[i].dataset.key
 //  if (e.key == x) {
 //   keys.forEach(key => key.classList.remove('active'));
 //   keys[i].classList.add('active');
 //  }
 // }
 console.log(e);
 if (e.keyCode) {
  e = e.keyCode
 }
 showKey.textContent = e
 const audio = document.querySelector(`audio[data-key="${e}"]`);
 const key = document.querySelector(`.key[data-key="${e}"]`);
 if (!audio) return;
 audio.currentTime = 0;
 audio.play()
 keys.forEach(k => k.classList.remove('active'));
 if (flag) return;
 flag = true;
 key.classList.add('active');
 setTimeout(function () {
  flag = false;
  return flag
 }, 220);
}

// const keys = document.querySelectorAll('ul li');
keys.forEach(key => key.addEventListener('transitionend', function (e) {
 if (e.propertyName !== 'transform') return;
 this.classList.remove('active');
}));

const randomPlay = () => {
 let x = Math.floor(Math.random() * 100);
 console.log(x);
 btnStart.classList.add('active');
 let y;
 if (x < 20) {
  y = 88;
 }
 if (x > 19 && x < 40) {
  y = 70;
 }
 if (x > 39 && x < 60) {
  y = 71;
 }
 if (x > 59 && x < 80) {
  y = 72;
 }
 if (x > 79) {
  y = 74;
 }
 document.querySelector(`audio[data-key="${y}"]`).play();
}
let rP;

const startRandomPlay = () => {
 if (!flag) {
  rP = setInterval(randomPlay, 200);
 }
}

btnStop.addEventListener('click', function () {
 btnStart.classList.remove('active');
 clearInterval(rP);
 flag = false;
});
btnStart.addEventListener('click', function () {
 startRandomPlay();
 flag = true;
});
window.addEventListener('keydown', playSound);

const init = function () {
 keys.forEach(k => k.addEventListener('click', function (e) {
  playSound(this.dataset.key);
  console.log(this.dataset.key);
 }))
}

init();