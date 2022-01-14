
let pagina = document.body;
let tituloPrincipal = pagina.querySelector('h1');
let lista = pagina.querySelector('ul');

let nickname = pagina.querySelector('#nickname');
let favorites = pagina.querySelector('#favorites');
let hometown = pagina.querySelector('#hometown');

pagina.classList.add('pagina');
tituloPrincipal.className = 'titulo';

nickname.textContent = 'Diogo Malagueta';
favorites.textContent = 'Benfica';
hometown.textContent = 'Lissabona';

let spans = document.querySelectorAll('span');

for (const span of spans) {
    span.className = 'destaque';
}

// Acrescentar imagem

let imagem = new Image();

imagem.setAttribute('src','image.jpg');

pagina.insertBefore(imagem, lista);