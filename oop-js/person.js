// prototypo inheritance

class PersonClass {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  //can add new method

  getbio() {
    let bio = `${this.firstName} is ${this.age}`;
    this.likes.forEach((like) => {
      bio = bio + ` ${this.firstName} likes ${like} `;
    });
    return bio;
  }
  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
} // valid class

// adding sub class

class Employee extends PersonClass {
  constructor(firstName, lastName, age, positions, likes = []) {
    super(firstName, lastName, age, likes);
    this.positions = positions;
  }
  getbio() {
    let bio = `${this.fullName} is a ${this.positions} `;
    return bio;
  }
  getYearsLeft() {
    return 65 - this.age;
  }

  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Students extends PersonClass {
  constructor(firstName, lastName, age, grade, likes = []) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  getbio() {
    if (this.grade > 70) {
      return `${this.firstName} is passing`;
    } else {
      return `${this.firstName} is failing`;
    }
  }
  updateGrade(marks) {
    this.grade = this.grade + marks;
  }
}

// const stu_1 = new Students("Chinmay", "Garge", 22, 60);
// stu_1.fullName = "Chinu Garge";
// console.log(stu_1.getbio());
// stu_1.updateGrade(20);
// console.log(stu_1.getbio());

const me_1 = new Employee("Chinmay", "Garge", 22, "Developer");
me_1.fullName = "Chinu Gar";
console.log(me_1.getbio());
