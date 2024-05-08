// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).
// Notes:

//     In the result codes and their values are in the same order as in M.
//     See "Samples Tests" for the return.

//My solution
function stockList(listOfArt, listOfCat){
    return (! listOfArt.length || ! listOfCat.length) ? "" : listOfCat.map(cat => {
      let needs = listOfArt.filter(el => el.charAt(0) === cat);
      let count = needs.reduce((a, b) => {
        return Number(a) + Number(b.split(" ")[1]);
      }, 0);
      
      return "(" + cat + " : " + count + ")";
    }).join(" - ");
  }
