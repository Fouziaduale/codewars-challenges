// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//My solution
function remove (string) {
    //coding and coding....
    if(string[string.length - 1] === '!'){
      return string.slice(0, string.length - 1)
    }else {
      return string
    }
    
  }
