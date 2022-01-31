

/// SCOPE, variaveis locais e variaveis globais 

var a = 12; // variavel global

function myFunction(){
    console.log('Dentro da funcão, valor de a:', a );
    
    var b = 15; // variavel local

    console.log('Dentro da funcão, valor de b:', b );
    
    if (true) {
        var c = 20;
    }

    console.log('Dentro da funcão, valor de c:', c );
}

myFunction();

