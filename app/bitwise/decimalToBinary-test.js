assert = require('chai').assert;

number = 32;
binary = parseInt(number, 10).toString(2);

console.log(number);
console.log(binary);

describe("Parse Integer Base 10 to Base 2 ", function() {
    it("Check Number", function() {
        assert(10000 == 10000);
    });
});
