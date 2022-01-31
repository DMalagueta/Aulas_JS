

const obj = {
    formacao: 'Javascript Next',
    formador: 'Joao',
    empresa: 'ETIC',
    ano: 2022,
    xpto: function(){
        console.log('Sou o metodo xpto')
        
    }
}

// console.log(obj);

/* 
console.log('--------------- ENTRIES -----------------');
console.log(Object.entries(obj));

console.log('--------------- ENTRIES -----------------');
console.log(Object.keys(obj));

console.log('--------------- ENTRIES -----------------');
console.log(Object.values(obj)); 
*/

//////////// criacao de Objectos ///////////////
/* 
console.log('--------------- create() -----------------');
const obj2 =Object.create(obj);
console.log(obj2);
console.log(obj2.formador);
obj2.country = 'Portugal';
console.log(obj2);

obj.formador = 'Manel';
console.log(obj2.formador);

obj2.formador = 'Maria';
console.log(obj2.formador);
console.log(obj.formador);
console.log(obj2) 
*/

console.log('--------------- assign() -----------------');
// Clonar objectos
const newObj = Object.assign(obj);
const newObj2 = Object.assign({}, obj, {pais: 'Portugal', formador: 'Maria'});

console.log(newObj2);

const cloneObj = {...obj, pais: 'espanha'};
console.log(cloneObj);