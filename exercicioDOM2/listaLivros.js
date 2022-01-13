let body = document.querySelector('body');
let h1 = document.createElement('h1');
let lista = document.querySelector('#lista');
let ul = document.createElement('ul');


h1.textContent = 'A minha Lista de Livros';
body.insertBefore(h1, body.firstChild);

let books = [
    {title:'livro 1', author:'zé ninguem', alreadyRead: true, image:'livros/angular.jpg'},
    {title:'livro 2', author:'zé ninguem1', alreadyRead: false, image:'livros/joj.jpg'},
    {title:'livro 3', author:'zé ninguem2', alreadyRead: true, image:'livros/reacthooks.jpg'},
    {title:'livro 4', author:'zé ninguem3', alreadyRead: false, image:'livros/d3js.png'},
];

body.appendChild(ul);

for (let index = 0; index < books.length; index++) {
        let li = document.createElement('li');
        let author = books[index].author;
        let title = books[index].title;
        let image = document.createElement('img');
        image.setAttribute('src', books[index].image);

        if (books[index].alreadyRead == true) {
            li.textContent = `Já leu ${title} by ${author}`;
        }
        else {
            li.textContent = `Não leu ${title} by ${author}`;
        }


        li.appendChild(image);
        ul.appendChild(li);


        console.log(books[index].title, "by" , books[index].author);
}

