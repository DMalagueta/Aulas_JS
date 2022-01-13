

// Selecionar 1 elemento 

let itemHot = document.querySelector('ul li.hot');

console.log(itemHot);

itemHot.className = 'cool';

let items = document.querySelectorAll('li');
console.log(items);
items[1].className = 'complete';