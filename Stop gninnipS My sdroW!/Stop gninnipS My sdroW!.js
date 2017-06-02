//https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript

/*Write a function that takes in a string of one or more words, and returns the 
same string, but with all five or more letter words reversed 
(Just like the name of this Kata). Strings passed in will consist of only letters 
and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
*/


function spinWords(str){
  var string = '';
  var arr = str.split(' ');
  return arr.map(function(n) {
    for(var i = 0; i<arr.length; i++) {
        string = "";
        if(n.length>=5) { 
          	for(var j = (n.length - 1); j>=0; j-- ){
            	string += n[j];
        	}
        }else{string = n}
    }
    return string;
  }).join(" ");
}