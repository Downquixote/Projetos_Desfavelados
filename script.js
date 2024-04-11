const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function IsLampBroken() {
    return lamp.src.indexof('quebrado') > -1;
}