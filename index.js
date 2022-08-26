function isPalindrome(word) {
  // Write your algorithm here
// word.split('').reverse().join();

const letters = word.split('');
const reverseLetters = letters.reverse();
const reverseString  = reverseLetters.join('')

if (word === reverseString){
  return true

} else {
  return false
}

}


// return word === reversedWord;



/* 
  Add your pseudocode here
  if reverse is same as forward
   return true. 
  Else
    return false

  const letters = word.split('');
  const reverseLetters = letters.reverse();
  const reverseString  = reverseLetters.join('')

  if (word === reverseString){
    return true

  } else {
    return false
  }

}

*/

/*
  Add written explanation of your solution here



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
