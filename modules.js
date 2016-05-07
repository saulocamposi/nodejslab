var mymodule = {};

mymodule.first = function(){console.log("firstFunction");};
mymodule.second = function(){console.log("secondFunction");};
mymodule.third = function(){console.log("thirdFunction");};

console.log(mymodule);

console.log(mymodule.first);
console.log(mymodule.second);
console.log(mymodule.third);


mymodule.first();

mymodule.second();

mymodule.third();
