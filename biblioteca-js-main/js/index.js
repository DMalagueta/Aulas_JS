// Modelo de dados, a ser representado na pagina (INPUTS)
let livros = [
    {
        id: 0,
        title: 'Angular com Typescript',
        author: "Yakov Fain",
        alreadyRead: true,
        imageUrl: 'angular.jpg',
        imageUrlGr: 'angularGr.png',
    },
    {
        id: 1,
        title: 'Blockchain com JS',
        author: "Someone Else",
        alreadyRead: false,
        imageUrl: 'blockchain.jpg',
        imageUrlGr: 'blockchainGr.png',
    },
    {
        id: 2,
        title: 'DeepLearning com JS',
        author: "Someone Else",
        alreadyRead: true,
        imageUrl: 'deeplearning.jpg',
        imageUrlGr: 'deeplearningGr.png',
    },
    {
        id: 3,
        title: 'Joy of Javascript',
        author: "Someone Else",
        alreadyRead: true,
        imageUrl: 'joj.jpg',
        imageUrlGr: 'jojGr.png',
    },
    {
        id: 4,
        title: 'React Hooks',
        author: "Someone Else",
        alreadyRead: false,
        imageUrl: 'reacthooks.jpg',
        imageUrlGr: 'reacthooksGr.png',
    },
];

document.addEventListener('DOMContentLoaded', init, false);

function init(){

    // DECLARACAO VARIAVEIS GLOBAIS
    let grid = document.querySelector('section.grid');
    let filters = document.querySelector('section.filters')

    let filterRead = document.querySelector('#filterRead');
    let filterNotRead = document.querySelector('#filterNotRead');
    
    let popup = document.querySelector('div.popup');

    let addArray = document.querySelector('#addArray')

    // BLOCO EVENTOS APP
    filters.addEventListener('change', filterEvents, false);
    grid.addEventListener('click', gridEvents, false);
    popup.addEventListener('click', popupClose, false);
    filters.addEventListener('input', filterEvents, false);
    addArray.addEventListener('click', addBook, false);

    /// LOGICA DO MEU ALGORITMO
    mostrarLivros(livros);


    /// BLOCO METODOS DE APLICACAO
    function filterEvents(e){

        //console.log("change dos filtros");
        //console.log(e.target.id);
        if (e.target.id === 'filterRead') {
            filtrarLivrosLidos(e.target.checked);
            filterNotRead.checked = false;
        }
        if (e.target.id === 'filterNotRead') {
            filtrarLivrosNaoLidos(e.target.checked);
            filterRead.checked = false;
        }
        if (e.target.id === 'filterTitle') {
            let input = e.target.value;
            filtrarTitulo(input);
            console.log(input)
        }

    }

    function gridEvents(e){
        //console.log(e.target.dataset.id);

        if (e.target.className === 'deleteBtn') {
            let id = e.target.dataset.id;
            apagarLivro(id);
        }
        
        if (e.target.tagName === 'IMG') {
            let img = e.target.dataset.imggr;
            console.log('imagem', img);
            popupImg(img); 
            popup.classList.add('open');
        }
    }


    /// BLOCO FUNCIONALIDADES APP
    function addBook(e){
        e.preventDefault();
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let jaLido = document.getElementById('jaLido').checked;
    }

    function popupClose(e){
        console.log(e.target);
        if (e.target.className === 'popup open'){
            popup.classList.remove('open');
        }
    }

    function popupImg(img){
        let imgSrc = document.querySelector('div img');
        imgSrc.src = `livros/${img}`;
    }

    function apagarLivro(id) {
        //console.log('apagar livro com id ',id);
        let novosLivros = livros.filter( livro => livro.id != id );
        livros = novosLivros;
        mostrarLivros(novosLivros);
    }

    function filtrarTitulo(input){
            if (input !== '') {
                let tituloLivro = livros.filter( livro => livro.title === input);
                mostrarLivros(tituloLivro);
            }
            else{
                mostrarLivros(livros);
            }
            
    }

    function filtrarLivrosLidos(checked){
        //console.log(checked);
        if (checked === true) {
            let livrosJaLidos = livros.filter( livro => livro.alreadyRead === true );
            mostrarLivros(livrosJaLidos);
        } else {
            mostrarLivros(livros);
        }
    }

    function filtrarLivrosNaoLidos(checked){
        if (checked === true) {
            let livrosNaoLidos = livros.filter( livro => livro.alreadyRead === false );
            mostrarLivros(livrosNaoLidos);
        } else {
            mostrarLivros(livros);
        }
        
    }

    function mostrarLivros(arrayLivros){

        grid.innerHTML = '';

        arrayLivros.map( livro => {
            grid.innerHTML += `
                <article>
                    <h1>${livro.title}</h1>
                    <h2>${livro.author}</h2>
                    <img  src='livros/${livro.imageUrl}' data-imgGr='${livro.imageUrlGr}'/>
                    <p> Already Read: ${livro.alreadyRead ? '✅' :'❌' }</p> 
                    <section>
                        <button class="deleteBtn" data-id="${livro.id}">Delete</button>
                        <button class="editBtn" data-id="${livro.id}">Edit</button>
                    </section
                </article>
            `;
        
        });
    }
}



