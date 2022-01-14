/* 
let livro1 = { 
    title: 'Angular com typescript',
    author: 'Yakov',
    alreadyRead: true, 
    imageUrl: 'angular.jpg'           
}

let livro2 = { 
    title: 'Blockchain com javascript',
    author: 'Someone else',
    alreadyRead: false, 
    imageUrl: 'blockchain.jpg'           
}

let livros = [livro1, livro2];

console.log(livros); */

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

/* for (const livro of livros) {
    console.log(`${livro.title} - ${livro.author}`)
} */

console.log('================================');
livros.map(livro => console.log(`${livro.title} - ${livro.author} `));
console.log('================================');

let grid = document.querySelector('section.grid');

livros.map( livro => {
    grid.innerHTML += `
        <article>
            <h1>${livro.title}</h1>
            <h2>${livro.author}</h2>
            <img src='livros/${livro.imageUrl}'
            <p>Already read: ${livro.alreadyRead ? '✓' : '💩'}</p>
        </article>
    `;
});

for (const livro of livros) {
    grid.innerHTML += `
        <article>
            <h1>${livro.title}</h1>
            <h2>${livro.author}</h2>
            <img src='livros/${livro.imageUrl}'
            <p>Already read: ${livro.alreadyRead ? '✓' : '💩'}</p>
        </article>
    `;
    
}

// operador ternario

let teste = true;

/* if (teste) {
    console.log('verdade');
}else{
    console.log('falso');
} */

teste ? console.log('verdade') : console.log('falso');