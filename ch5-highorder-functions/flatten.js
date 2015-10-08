//Exercise: use reduce method with concat method to "flatten" an array of arrays
//          into single array
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(a,b){return a.concat(b);}));