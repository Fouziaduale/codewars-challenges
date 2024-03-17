// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar

//My solution
function isPalindrome(x) {
    // your code here
     x = x.toLowerCase()
      let y = ''
      for (let i = x.length - 1; i >= 0; i--) {
          y += x[i].toLowerCase()
      }
      return y == x ? true : false
  }