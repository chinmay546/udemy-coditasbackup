let getGrade = function (studentScore, totalScore) {
  if (typeof studentScore === "number" && typeof totalScore === "number") {
    let percentage = (studentScore / totalScore) * 100;
    let grade;

    if (percentage <= 100 && percentage >= 90) {
      grade = "A";
    }
    if (percentage <= 89 && percentage >= 80) {
      grade = "B";
    }
    if (percentage <= 79 && percentage >= 70) {
      grade = "C";
    }
    if (percentage <= 69 && percentage >= 60) {
      grade = "D";
    }
    if (percentage <= 59) {
      grade = "F";
    }

    console.log(`You got a ${grade} (${percentage}%) !`);
  } else {
    throw Error;
  }
};

try {
  getGrade(26, "d");
} catch (e) {
  console.log(e.message);
}
