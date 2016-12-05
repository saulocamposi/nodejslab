number = 32;
console.log(number);
binary = parseInt(number, 10).toString(2);
console.log(binary);

and_number = 1 & number;
or_number =  1 | number;
not_number = ~ number;
xor_number =  1 ^ number;
shift_left_number = number << 3;
shift_rigth_number = number >> 3;

console.log(and_number);
console.log(or_number);
console.log(not_number);
console.log(xor_number);
console.log(shift_left_number);
console.log(shift_rigth_number);
