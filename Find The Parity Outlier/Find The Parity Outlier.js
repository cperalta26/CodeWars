//https://www.codewars.com/kata/find-the-parity-outlier/train/javascript

/*You are given an array (which will have a length of at least 3, 
but could be very large) containing integers. The array is either entirely 
comprised of odd integers or entirely comprised of even integers except for a 
single integer N. Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160
*/



function findOutlier(integers){
  //console.log(integers);
  var even = integers.filter(n=>Math.abs(n%2)===0);
  var odd = integers.filter(n=>Math.abs(n%2)===1);
  
  if (even.length>odd.length) {return odd[0];} 
  else{return even[0];}
}

