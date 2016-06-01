var students = [
  {"name": "Dale Cooper", "class": "calculus", "tests":[30, 28, 45]},
  {"name": "Harry Truman", "class": "algebra", "tests":[30, 28, 45]},
  {"name": "Harry Potter", "class": "boolean algebra", "tests":[30, 10, 45]},
  {"name": "Maria Bonita", "class": "college algebra", "tests":[12, 28, 45]},
  {"name": "David Copperfield", "class": "geometry", "tests":[30, 28, 45]},
  {"name": "Gisele Bundchen", "class": "calculus", "tests":[30, 34, 45]},
  {"name": "Alice Cooper", "class": "geometry", "tests":[20, 28, 45]}
];

var students = [
  {name: "Dale Cooper", class: "calculus", tests:[30, 28, 45]},
  {name: "Harry Truman", class: "algebra", tests:[30, 28, 45]},
  {name: "Harry Potter", class: "boolean algebra", tests:[30, 10, 45]},
  {name: "Maria Bonita", class: "college algebra", tests:[12, 28, 45]},
  {name: "David Copperfield", class: "geometry", tests:[30, 28, 45]},
  {name: "Gisele Bundchen", class: "calculus", tests:[30, 34, 45]},
  {name: "Alice Cooper", class: "geometry", tests:[20, 28, 45]}
];

var names = [];

for(i = 0; i < students.length; i++ ){
  names.push(students[i].name);
}

names

var studInfo = students.map(function(x){
    return x.name + " is in " + x.class;
})

studInfo

var tests = [ {score : 30},
              {score : 28},
              {score : 45} ]

var testSum = tests.reduce();             
