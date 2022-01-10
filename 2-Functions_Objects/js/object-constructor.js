// ES5

/* function Hotel (nome, quartos, reservas) {
    this.name = nome;
    this.rooms = quartos;
    this.booked = reservas;
    this.check = function (){
        return this.rooms - this.booked;
    }
}; */

//ES6
class Hotel{
    
    constructor(nome, quartos, reservas) {
        this.name = nome;
        this.rooms = quartos;
        this.booked = reservas;
    }

    check(){
        return this.rooms - this.booked;
    }

}

console.log(typeof(Hotel));

let ritz = new Hotel('Ritz',200,55);
let evolution = new Hotel('Evolution',150,55);



var divName = document.getElementById('hotelName');
divName.textContent = evolution.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = evolution.check();