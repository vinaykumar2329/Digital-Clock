
const hour = document.querySelector('.hour')
const mint = document.querySelector('.minute')
const seco = document.querySelector('.seconds')
const unit = document.querySelector('.unit')



setInterval(() => {
  let d = new Date;
  x = d.getHours();
  y = d.getMinutes();
  z = d.getSeconds();

  hour.innerHTML = x < 10 ? '0' + x : x;
  mint.innerHTML = y < 10 ? '0' + y : y;
  seco.innerHTML = z < 10 ? '0' + z : z;

  unit.innerText = x < 12 ? 'AM' : 'PM';

}, 1000);

const D = new Date;
const date = document.querySelector('#date')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const week = document.querySelector('#week')

date.innerHTML = D.getDate();
month.innerHTML = D.toLocaleString('default', { month: 'long' })
week.innerHTML = D.toLocaleString('default', { weekday: 'long' })
year.innerHTML = D.getFullYear();

