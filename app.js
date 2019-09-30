
// ваш код
let sum = prompt('Введите сумму займа в рублях ');
let time = prompt('Введите время займа');
let interest = 10;
let daily = (sum/time * interest).toFixed(2);
let overflow = ((time*daily)-sum).toFixed(2);
// подставте значениея
document.getElementById('sum').innerHTML = sum + ' руб';
document.getElementById('time').innerHTML = time + ' дней';
document.getElementById('interest').innerHTML = interest + ' %';
document.getElementById('daily').innerHTML = daily + ' руб';
document.getElementById('overflow').innerHTML = overflow + ' руб';
