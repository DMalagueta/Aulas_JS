// Modelo de dados a ser apresentado na pagina
let livros = [
    { 
        title: 'Angular com typescript',
        author: 'Yakov',
        alreadyRead: true, 
        imageUrl: 'angular.jpg'           
    },
    { 
        title: 'Blockchain com javascript',
        author: 'Someone else',
        alreadyRead: false, 
        imageUrl: 'blockchain.jpg'           
    },
    { 
        title: 'Deeplearning com javascript',
        author: 'Someone else',
        alreadyRead: false, 
        imageUrl: 'deeplearning.jpg'           
    },
    { 
        title: 'The joy of JavaScript',
        author: 'Someone else',
        alreadyRead: false, 
        imageUrl: 'joj.jpg'           
    },
    { 
        title: 'React hooks',
        author: 'Someone else',
        alreadyRead: false, 
        imageUrl: 'reacthooks.jpg'           
    }
];


let grid = document.querySelector('section.grid');

// Mostrar livros todos
//mostrarLivros(livros);

//mostrar livros ja lidos
let livrosJaLidos = livros.filter( livro => livro.alreadyRead == true);

//mostrar livros nao lidos
let livrosNaoLidos = livros.filter( livro => livro.alreadyRead == false);

// mostrarLivros(livrosNaoLidos)

mostrarLivros(livros);

function mostrarLivros(arrayLivros) {
    arrayLivros.map( livro => {
        grid.innerHTML += `
            <article>
                <h1>${livro.title}</h1>
                <h2>${livro.author}</h2>
                <img src='livros/${livro.imageUrl}'
                <p>Already read: ${livro.alreadyRead ? '✓' : '💩'}</p>
                <button id="livro${livro.id}">Delete</button>
            </article>
        `;
    });
}

let remove = document.querySelectorAll('button');
for (const item of remove) {
    item.addEventListener('click',removeBook, false);
}


function removeBook(e) {
    e.preventDefault();
    let id = e.target.id;
    let array = livros.filter(l => l.id !== id);
    console.log(array);
}


