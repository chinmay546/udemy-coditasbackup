const squ = (num) => num * num;
console.log(squ(678));

const people = [
  {
    name: "abc",
    age: 34,
  },
  {
    name: "rthbvf",
    age: 25,
  },
  {
    name: "yhvrtgh",
    age: 22,
  },
];

const under30 = people.filter(function (pe) {
  return pe.age < 30;
});

const under_30 = people.filter((pe) => pe.age < 30);
console.log(under_30);

const age22 = people.find((pe) => pe.age === 22);
console.log(age22.name);
