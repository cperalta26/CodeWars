//https://www.codewars.com/kata/bit-counting/train/javascript

/*Write a function that takes an (unsigned) integer as input, and returns the number 
of bits that are equal to one in the binary representation of that number.

Example: The binary representation of 1234 is 10011010010, so the function 
should return 5 in this case
*/


 
var countBits = function(n) {
  var arr = [];
  while(n>=1){
    arr.push(n);
    n=Math.floor(n/2);
    //console.log(n)
  }
  var ones = arr.filter(num=>num%2!==0);
  //console.log(arr);
  return ones.length;
};