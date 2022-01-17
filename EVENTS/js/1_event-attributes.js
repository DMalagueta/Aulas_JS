
let username = document.getElementById('username');
let feedback = document.querySelector('#feedback');

function checkUsername() {
    if (username.value.length < 5){
        feedback.textContent = 'tem que ter mais de 5 caracteres';
    } else {
        feedback.textContent = '';
    }
}

