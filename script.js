const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');

const relogio = setInterval(function(){
    let dateToday = new Date();
    let horas = dateToday.getHours();
    let minutos = dateToday.getMinutes();
    let segundos = dateToday.getSeconds();

    if(horas < 10) horas = '0' + horas;
    if(minutos < 10) minutos = '0' + minutos;
    if(segundos < 10) segundos = '0' + segundos;

    horasElement.textContent = horas;
    minutosElement.textContent = minutos;
    segundosElement.textContent = segundos;
}, 1000);
