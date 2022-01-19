/* window.addEventListener('load',init,false);

function init() {
    let username = document.querySelector('#username');

    username.focus();
    
    username.addEventListener('input', dizerOla, false);
    
    function dizerOla(e){
        console.log('user: ', e.target.value);
    }

} */

document.addEventListener('DOMContentLoaded', init, false);

function init() {
    let username = document.querySelector('#username');

    username.focus();
    
    username.addEventListener('input', dizerOla, false);
    
    function dizerOla(e){
        console.log('user: ', e.target.value);
    }

}


