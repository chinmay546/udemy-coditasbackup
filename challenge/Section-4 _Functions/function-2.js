// challenge
// argu : total , tip_per 
//tip_per is defualt to 0.2
let getTip = function(total , tip_per = 0.2) {

    return total * tip_per
   }
let tip = getTip(535 , 0.5)
console.log(tip)