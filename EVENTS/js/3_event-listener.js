
let username = document.getElementById('username');
let feedback = document.querySelector('#feedback');

username.focus();

username.addEventListener('blur', checkUsername, false);

function checkUsername() {
    if (username.value.length < 5){
        feedback.textContent = 'tem que ter mais de 5 caracteres';
    } else {
        feedback.textContent = '';
    }
}

/* username.addEventListener('blur', function () {
    if (username.value.length < 5){
        feedback.textContent = 'tem que ter mais de 5 caracteres';
    } else {
        feedback.textContent = '';
    }
}, false); */