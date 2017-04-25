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
