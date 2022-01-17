let username = document.getElementById('username');
let feedback = document.querySelector('#feedback');

/* username.onblur = checkUsername;

// function declaration
function checkUsername() {
    if (username.value.length < 5){
        feedback.textContent = 'tem que ter mais de 5 caracteres';
    } else {
        feedback.textContent = '';
    }
} */

//function expression
/* username.onblur = function () { //funcao anonima
    if (username.value.length < 5){
        feedback.textContent = 'tem que ter mais de 5 caracteres';
    } else {
        feedback.textContent = '';
    }
} */

// arrow function
//username.onblur = () => {
username.onblur = _ => { 
    if (username.value.length < 5){
        feedback.textContent = 'tem que ter mais de 5 caracteres';
    } else {
        feedback.textContent = '';
    }
}
