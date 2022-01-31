
let obj = {
    name : 'Diogo',
    lastName: 'Malagueta',
    address: {
        city: 'Lisboa',
        country: 'Portugal'
    }
};

console.log('Cidade: ' ,obj.address.city);

let {name, lastName, address: {city, country}} = obj;

console.log(name, city);

/* function aoClicar({target:{id}}){
    console.log(id);
} */