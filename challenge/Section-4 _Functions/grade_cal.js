// grade A for range between 100-90
// grade B for range between 89 - 80
// grade C for range between 79 -70
// grade D for range between 69 -60
// grade F for less than 59 




let getGrade = function(studentScore, totalScore ) {
    let percentage = studentScore/ totalScore * 100
    let grade 

    if (percentage <= 100 && percentage>= 90) {
       grade = "A"
    } 
    if (percentage <= 89 && percentage>= 80) {
        grade = "B"
    } 
    if (percentage <= 79 && percentage>= 70) {
        grade = "C"
    } 
    if (percentage <= 69 && percentage>= 60) {
        grade = "D"
    } 
    if (percentage <= 59) {
        grade = "F"
    } 

    console.log(`You got a ${grade} (${percentage}%) !`)

}

getGrade(26 , 155)

