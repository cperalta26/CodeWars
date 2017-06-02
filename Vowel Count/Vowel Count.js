//https://www.codewars.com/kata/vowel-count/train/javascript

/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/


function getCount(str) {
 return str.split('').filter(function(vowel) {return vowel.match(/[aeiou]/)}).length;
}