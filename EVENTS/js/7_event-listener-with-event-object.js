
let username = document.getElementById('username');
let password = document.getElementById('password');
let apelido = document.getElementById('apelido');

username.addEventListener('blur', check, false);
apelido.addEventListener('blur', check,false);
password.addEventListener('blur', check, false);

function check(e) {
    //console.log(e);
    //debugger;

    //console.log(e.target);
    let campoAValidar = e.target;
    let msgDiv = campoAValidar.nextElementSibling;

    if( campoAValidar.value.length < 5 ) {
        msgDiv.textContent = 'Tem que ter mais de 5 caracteres';
    } else {
        msgDiv.textContent = '';
    }
}