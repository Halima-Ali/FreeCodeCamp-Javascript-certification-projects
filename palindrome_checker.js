function palindrome(str) {
  // so bascically replace the spaces punctuation and symbols
  // then split the individual characters into an array. then reverse the string and join it back to a string and convert all the characters to lower case
  let cleanStr=str.replace(/\W+|_/g,"").split("").reverse().join("").toLowerCase();
  let reverseStr=str.replace(/\W+|_/g,"").toLowerCase();
console.log(cleanStr,reverseStr);
if(cleanStr===reverseStr){
return true;
}
else{
  return false;
}

}

let result=palindrome("A man, a plan, a canal. Panama");
console.log(result);