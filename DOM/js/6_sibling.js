let item2 = document.querySelector('#two');

let itemAnterior = item2.previousElementSibling;
let itemSeguinte = item2.nextElementSibling;

itemAnterior.className = 'cool';
itemSeguinte.className = 'complete';