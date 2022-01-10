let hotel = {
    name : 'Ritz',
    rooms : 200,
    booked: 55,
    check : function(){
        return this.rooms - this.booked;
    }

}

let outroHotel = {
    name : 'Evolution',
    rooms: 150,
    booked: 35,
    check : function(){
        return this.rooms - this.booked;
    }
}


var divName = document.getElementById('hotelName');
divName.textContent = outroHotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = outroHotel.check();
