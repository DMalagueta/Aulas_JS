/// acrescentar um novo li a lista
let lista = document.querySelector('ul');

// 1 criar um novo li
let novoItemFim = document.createElement('li');

// 2 Criar texto do li
let novoItemFimTexto = document.createTextNode('morangos')

// 3 acrescentar o text ao li
novoItemFim.appendChild(novoItemFimTexto);

// 4 acrescentar o li a ul
lista.appendChild(novoItemFim);

// 5 acrescentar novo li inicio
let novoItemInicio = document.createElement('li');
novoItemInicio.textContent = 'bananas';

lista.insertBefore(novoItemInicio, lista.firstElementChild);

