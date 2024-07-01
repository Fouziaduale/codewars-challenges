// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

//My solution
function capitalize(s){
    const S = s.toUpperCase()
    let a = ""
    let b = ""
    for (let i = 0; i < s.length; ++i) {
      if (i & 1) {
        a += s[i]
        b += S[i]
      } else {
        a += S[i]
        b += s[i]
      }
    }
    return [a, b]
  };
