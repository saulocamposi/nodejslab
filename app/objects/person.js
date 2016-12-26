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
console.log(c);
d = a.age;
console.log(d);
e = a.gender;
console.log(e);
