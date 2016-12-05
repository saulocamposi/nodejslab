s1 = "saulo";
s2 = "campos";

s1characters = s1.split('');
s2characters = s2.split('');

s1characters.forEach(function(value){
  console.log(value);
});

s2characters.forEach(function(value){
  console.log(value);
});

console.log( s1.split('') );
console.log( s2.split('') );

console.log( s1characters.length );
console.log( s1.length );

for (var i = 0; i < s1characters.length; i++) {
  console.log(s1characters[i]);
}

for (var i = 0; i < s2characters.length; i++) {
  console.log(s2characters[i]);
}

lengthString =  s1.length >= s2.length ? s2.length : s1.length;

console.log( lengthString );
