/*
Create a function that returns the sum of the two lowest positive numbers given an array
of minimum 4 integers. No floats or empty arrays will be passed.
For example, when an array is passed like [19,5,42,2,77], the output should be 7.
[10,343445353,3453445,3453545353453] should return 3453455.
*/

range = [19, 5, 42, 2, 77];

console.log(range);

function sumTwoSmallestNumbers(numbers) {
    console.log("range inside function " + numbers);
    console.log("Is array numbers " + Array.isArray(numbers));
    console.log("Is higher than 4 " + (numbers.length >= 3 && "true"));

    if (Array.isArray(numbers) && numbers.length >= 4) {

      var firstsmallest = numbers[0];
      var secondsmallest = numbers[1];

      if (firstsmallest > secondsmallest) {
        firstsmallest = numbers[1];
        secondsmallest = numbers[2];
      }

        console.log("Start Sort");
        for (var i = 2; i < numbers.length; i++) {
            if(numbers[i] < firstsmallest){
              secondsmallest = firstsmallest;
              firstsmallest = numbers[i];
            }else if (numbers[i] < secondsmallest) {
              secondsmallest = numbers[i]
            }
        }

    }
    console.log("The firstsmallest number is :" + firstsmallest);
    console.log("The secondsmallest number is :" + secondsmallest);
    
    return firstsmallest + secondsmallest;
};

sumTwoSmallestNumbers(range);
