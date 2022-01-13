let item1 = document.querySelector('#one');
/* let item4 = document.querySelector('#four'); */

item1.setAttribute('class', 'cool');

console.log(item1.getAttribute('class'));

if (item1.hasAttribute('class')) {
    item1.removeAttribute('class');
}

//item4.removeAttribute('class');