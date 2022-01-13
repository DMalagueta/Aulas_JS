/*
1 - Acrescentar um novo item no inicio e no final da lista
2 - aplicar a class "cool" a todos os itens da lista
3 - Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista
*/

let lista = document.querySelector('ul');
let h2 = document.querySelector('h2');

let novoItemFim = document.createElement('li');
novoItemFim.textContent = 'ananas';

lista.insertBefore(novoItemFim, lista.lastChild);

let novoItemInicio = document.createElement('li');
novoItemInicio.textContent = 'figos';

lista.insertBefore(novoItemInicio, lista.firstElementChild);

let items = document.querySelectorAll('li');

for (const item of items) {
    item.className = 'cool';
    
}

let novoSpan = document.createElement('span');

novoSpan.textContent = items.length;

h2.insertBefore(novoSpan, h2.firstChild);

