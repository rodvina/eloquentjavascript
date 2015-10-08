//eloquentjavascript.net
//summarizing an array with reduce. reduce function takes 2 args that represent current
//value and next array value, processes these 2 values and return a single value as the new
//current value.  typical use cases are sums, finding greatest/least values, etc.
//old school
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
    return a + b;
}, 0));
// ? 10

//reduce function on an array. this does the same thing as above
console.log([1,2,3,4].reduce(function(a, b) {
        return a+b;
    }));