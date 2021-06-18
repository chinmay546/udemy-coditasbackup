// both vegan ? only offer up vegan
// atleast one vegan ? offeer some vegan options
// else , offer up anything

let guestOne = true
let guestTwo = false

if (guestOne && guestTwo ) {
    console.log("only offer up vegan")

}
else if (guestOne || guestTwo){
    console.log("offer some vegan options")
}
else {
    console.log("offer any thing")
}