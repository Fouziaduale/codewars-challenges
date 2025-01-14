// You are creating an "Escape the room" game. The first step is to create a hash table ( dict in Python) called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each room being a hash table with at least 3 properties (e.g. name, description, completed).

//My solution
class Room  {
    constructor() {
      this.name = '';
      this.description = '';
      this.completed= '';
    }
  }
  let rooms = {
    bedroom : new Room(),
    kitchen : new Room(),
    bathroom : new Room(),
  }