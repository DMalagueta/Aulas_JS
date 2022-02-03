import xpto, {olaUniverso, nome} from './libEs6.js';

document.addEventListener('DOMContentLoaded', init, false);


function init() {

    let info = document.getElementById('info');

    info.innerHTML = `
    <p>A utilizar o modulo de ES5: ${libEs5.dizerOla()} </p>
    <hr>
    <p>A utilizar o modulo de ES6: ${olaUniverso()} </p>
    <p>${nome}</p>
    <p>${xpto()}</p>
    `;
}