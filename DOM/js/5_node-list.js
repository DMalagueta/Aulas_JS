
let items = document.querySelectorAll('li');

for (const item of items) {
    item.className = 'cool';
}

for (let i = 0; i <items.length; i++) {
    items[i].className = 'complete';
}
