function person(){

  var name,age,gender;

  var firstStep = function(){console.log("First Step")};

  return {
           first : firstStep,
           name : "Author Name",
           age : 33,
           gender : "Male"
         };
};

a = person();
b = a.first;
b();
c = a.name;
d = a.age;
e = a.gender;

console.log(c);
console.log(d);
console.log(e);
