/*
1 - Acrescentar um novo item no inicio e no final da lista
2 - aplicar a class "cool" a todos os itens da lista
3 - Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista
*/

// Manipulação lista de itens
let lista = document.querySelector('ul');

// Criar 2 itens
let novoItemInicio = document.createElement('li');
novoItemInicio.textContent = 'figos';

let novoItemFim = document.createElement('li');
novoItemFim.textContent = 'ananas';

// Acrescentar item no inicio
lista.insertBefore(novoItemInicio, lista.firstElementChild);

// Acrescentar item no final
lista.appendChild(novoItemFim);

// Aplicar a class "cool" a todos os itens da lista

//let items = lista.querySelectorAll('li');

for (const item of lista.children) {
    /* item.className = 'cool'; */
    item.classList.add('cool');
}

// Acrescentar tag span ao h2
let novoSpan = document.createElement('span');
novoSpan.textContent = lista.children.length;

lista.previousElementSibling.appendChild(novoSpan);

