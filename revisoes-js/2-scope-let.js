

/// SCOPE, variaveis locais e variaveis globais 

let a = 12; // variavel global

function myFunction(){
    console.log('Dentro da funcão, valor de a:', a );
    
    let b = 15; // variavel local

    console.log('Dentro da funcão, valor de b:', b );
    
    if (true) {
        let c = 20;
    }

    //console.log('Dentro da funcão, valor de c:', c);
}

myFunction();

