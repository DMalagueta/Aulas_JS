// funcao para calcular areas de rectangulos

function getArea (width, height){
    let area = width * height;
    return area;
}

// funcao que gera numero aleatorio

function randomNumber (n1, n2){
    let randomNumberGen = Math.round(Math.random() * (n2-n1) + n1);
    
    return randomNumberGen;
}