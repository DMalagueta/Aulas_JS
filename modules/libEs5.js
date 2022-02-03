
// Modulo em ES5

var libEs5 = (function(){

    // console.log('teste modulo es5');

    var nome = 'Diogo';

    function dizerOla(){
        return `Olá ${nome} bem vindo.`
    }

    return {
        //dizerOla: dizerOla,
        dizerOla, // short hand properties ES9
    }

})();
 