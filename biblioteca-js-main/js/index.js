document.addEventListener('DOMContentLoaded', init, false);

function init(){

    // DECLARACAO VARIAVEIS GLOBAIS
    let grid = document.querySelector('section.grid');
    let filters = document.querySelector('section.filters')

    let filterRead = document.querySelector('#filterRead');
    let filterNotRead = document.querySelector('#filterNotRead');
    
    let popup = document.querySelector('div.popup');

    // VARIAVEIS FORMULARIO
    let formBook = document.querySelector('section.addEditBook form');
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let alreadyRead = document.querySelector('#alreadyRead');
    let imgUrl = document.querySelector('#imgUrl');
    let imageUrlGr = document.querySelector('#imgUrlGr');

    // BLOCO EVENTOS APP
    filters.addEventListener('change', filterEvents, false);
    filters.addEventListener('input', filterEvents, false);

    grid.addEventListener('click', gridEvents, false);
    popup.addEventListener('click', popupClose, false);

    formBook.addEventListener('submit', criarLivro, false);

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
            popupOpen(img); 
        }
    }

    /// BLOCO FUNCIONALIDADES APP
    function criarLivro(e){
        e.preventDefault();
        let id = new Date().getTime();

        let livro = new Livro(
            id,
            title.value,
            author.value,
            alreadyRead.checked,
            imgUrl.value,
            imgUrlGr.value
        );
        
        livros.push(livro);
        mostrarLivros(livros);
        console.log(livro);
    }

    function addBook(e){
        e.preventDefault();
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let jaLido = document.getElementById('jaLido').checked;
        
        console.log(livros)

    }

    function filtrarTitulo(input){
        let tituloLivro = livros.filter( livro => livro.title.search(input) > -1);
        mostrarLivros(tituloLivro);      
    }

    function popupClose(){
        // popup.classList.remove('open');
        popup.classList.toggle('open');
    }

    function popupOpen(img){
        // popup.classList.add('open');
        popup.classList.toggle('open');
        popup.firstElementChild.src = `livros/${img}`;
    }

    function apagarLivro(id) {
        //console.log('apagar livro com id ',id);
        let novosLivros = livros.filter( livro => livro.id != id );
        livros = novosLivros;
        mostrarLivros(novosLivros);
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



