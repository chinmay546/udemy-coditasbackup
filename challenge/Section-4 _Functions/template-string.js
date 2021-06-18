// challenge
// challenge
// argu : total , tip_per 
//tip_per is defualt to 0.2
// using string template
let tip = function(total , tip_per = 0.2) {

    console.log(`Your Tip for ${total} for percentage ${tip_per * 100} is ${total * tip_per }`)
   }

tip(535 , 0.5)