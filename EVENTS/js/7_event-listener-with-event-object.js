
let username = document.getElementById('username');
let password = document.getElementById('password');
let apelido = document.getElementById('apelido');

username.addEventListener('blur',(e) =>{ check(e,5)}, false);
apelido.addEventListener('blur', (e) =>{ check(e,8)},false);
password.addEventListener('blur', (e) =>{ check(e,4)}, false);

function check(e, min=5) {
    //console.log(e);
    //debugger;

    //console.log(e.target);
    let campoAValidar = e.target;
    let msgDiv = campoAValidar.nextElementSibling;

    if( campoAValidar.value.length < min ) {
        msgDiv.textContent = `Tem que ter mais de ${min} caracteres`;
    } else {
        msgDiv.textContent = '';
    }
}

/* function check(e) {
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
} */