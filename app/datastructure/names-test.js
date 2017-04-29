assert = require('chai').assert;

var names = ['saulo','paulo','joel'];

var namechoose = function(number){
  return names[number];
}

console.log(namechoose(0));
console.log(namechoose(1));
console.log(namechoose(2));

describe("Test elements of array ", function() {
    it("Check Names", function() {
        assert(namechoose(0) == "saulo");
        assert(namechoose(1) == "paulo");
        assert(namechoose(2) == "joel");
    });
});
