assert = require('chai').assert;

number = 32;
binary = parseInt(number, 10).toString(2);
and_number = 1 & number;
or_number =  1 | number;
not_number = ~ number;
xor_number =  1 ^ number;
shift_left_number = number << 3;
shift_rigth_number = number >> 3;

console.log(" Number Base is : " + number);
console.log(" Number Binary is : " + binary);
console.log(" Number AND is : " + and_number);
console.log(" Number OR is : " + or_number);
console.log(" Number NOT is : " + not_number);
console.log(" Number XOR is : " + xor_number);
console.log(" Number SHIFT LEFT is : " + shift_left_number);
console.log(" Number SHIFT RIGTH is : " + shift_rigth_number);

describe("Logs above", function () {

    it("It must be number 32", function(){
      assert(number == 32);
    });

    it("It must be binary number 10000", function(){
      assert(binary == 100000);
    });

    it("It must be AND 0", function(){
      assert(and_number == 0);
    });

    it("It must be OR 33", function(){
      assert(or_number == 33);
    });

    it("It must be NOT -33", function(){
      assert(not_number == -33);
    });

    it("It must be XOR 33", function(){
      assert(xor_number == 33);
    });

    it("It must be SHIFT LEFT 256", function(){
      assert(shift_left_number == 256);
    });

    it("It must be SHIFT RIGHT 4", function(){
      assert(shift_rigth_number == 4);
    });

});
