// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//My solution
function cubeOdd(arr) {
    let result = arr.filter(x => x % 2 !== 0)
                    .map(x => x * x * x)
                    .reduce((a,b) => a + b, 0)
    return isNaN(result) ? undefined : result
  }
