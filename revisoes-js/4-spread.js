// spread operator    

let arr1 = [1, 2, 3,];
let arr2 = [6, 7, 8,];

// console.log(arr1.length);

// let arr3 = ['Diogo', 1213, arr1, 'string da treta', arr2];
let arr3 = ['Diogo', 1213, ...arr1, 'string da treta', ...arr2];

console.log(arr3);

// console.log(arr3[2][0]);

console.log(arr3.length);