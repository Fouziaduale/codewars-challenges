// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'

//My solution
function greet (name, owner) {
    const person = name === owner ? 'boss': 'guest';
    return `Hello ${person}`;
  }
