var mymodule = {};

mymodule.first = function(){console.log("firstFunction");};
mymodule.second = function(){console.log("secondFunction");};
mymodule.third = function(){console.log("thirdFunction");};

console.log(mymodule);

console.log("reading function module first" + mymodule.first);
console.log("reading function module second" + mymodule.second);
console.log("reading function module third" + mymodule.third);


mymodule.first();

mymodule.second();

mymodule.third();
