// REST OPERATOR

function xpto(a, b, ...arg){
    console.log('Argumentos (arg) da funçao: ', arg);
}

xpto(1,2,3,4,5,6);

const arr1 = [1,2,3];
const arr2 = [...arr1];

console.log(arr1);
console.log(arr2);
arr2.push(9);
console.log(arr1);
console.log(arr2);