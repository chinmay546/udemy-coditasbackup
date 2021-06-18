// adding three methods for objects 
let restaurant = {
    name : "ABC",
    guestCapacity : 75 ,
    guestCount : 0 ,
    checkAvail : function(partySize){
        let seatLeaf = this.guestCapacity -  this.guestCount
        return partySize <= seatLeaf
    },
    searParty : function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty : function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}
restaurant.searParty(72)
console.log(restaurant.checkAvail(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvail(4))