/*
Write a function, persistence, that takes in a positive parameter num and
returns its multiplicative persistence, which is the number of times you
must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {

     var count = 1;
     var chainString = num.toString();
     var base = 1;
     var chainNumber = 1;

     while(num >= 10){
       baseString = base.toString();
       chainNumber = baseString.split('');
       base = 1;

       chainNumber = chainString.split('');

       for(var i = 0 ; i < chainNumber.length; i++){
         var elementChain = parseInt(chainNumber[i]);

         console.log("Element Chain : " + elementChain);

         base =  base * elementChain ;
         console.log("Base: " + base);
       }

       count++;
       //if (count >= 3) {
        // break;
       //}
       num = base;

       console.log("Base: " + base);
       console.log("Chain number: " + chainNumber);
       console.log("Num: " + num);
       console.log(count);
       //num--;
       //count++;
     }
     return count;
   }

persistence(999);
