
let username = document.getElementById('username');
let feedback = document.querySelector('#feedback');

username.focus();

/* username.addEventListener('blur', check(5), false); */

username.addEventListener('blur', () => {check(8)}, false);

function check(min) {
    console.log(min);
    if (username.value.length < min){
        feedback.textContent = `tem que ter mais de ${min} caracteres`;
    } else {
        feedback.textContent = '';
    }
}

