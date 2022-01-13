
// Estilizar body
let body = document.querySelector('body');

body.setAttribute('style', 'background-color:grey; font-style:italic; font-size:1.5em;');

// Adicionar conteudo spans

let nickname = document.getElementById('nickname');
nickname.textContent = 'Diogo';

let favorites = document.getElementById('favorites');
favorites.textContent = 'Tinder';

let hometown = document.getElementById('hometown');
hometown.textContent = 'Lissabona';


// atribuir estilo a cada elemento da ul
let itemsUl = document.querySelectorAll('ul');

for (const item of itemsUl) {
    item.setAttribute('style', 'color: white;');
}

// Acrescentar img
let list = document.querySelector('ul');
let addImg = document.createElement('img');
addImg.setAttribute('src', 'livros/angular.jpg');
list.insertBefore(addImg, list.firstElementChild);

// Registo Livros

let books = [
    {title:'livro 1', author:'zé ninguem', alreadyRead: true, image:'wa-logotipo-site.jpg '},
    {title:'livro 2', author:'zé ninguem1', alreadyRead: false, image:'wa-logotipo-site.jpg '},
    {title:'livro 3', author:'zé ninguem2', alreadyRead: true, image:'wa-logotipo-site.jpg '},
    {title:'livro 4', author:'zé ninguem3', alreadyRead: false, image:'wa-logotipo-site.jpg '},
];

for (let index = 0; index < books.length; index++) {
    
    if (books[index].alreadyRead == true) {
        console.log("Já leu", books[index].title, "by" , books[index].author);
    } else {
        console.log("Não leu", books[index].title, "by", books[index].author);
    }
}
