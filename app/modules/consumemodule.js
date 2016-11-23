path = require("path"),

mymodule = require(path.join(__dirname, 'externalmodule.js')),

mymodule.first();
mymodule.second();
mymodule.third();
