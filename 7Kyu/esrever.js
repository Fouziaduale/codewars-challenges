// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

//My solution
reverse = function(array) {
    return array.map((c, i) => array[array.length - 1 - i]);
  }
