//eloquentjavascript.net
//high-order functions are functions that abstract the details that contributes to
//shorter and easier to interpret code.  they operate on other functions, either
//by taking them as args or by returning them
var ancestrydata = require('./ancestry.js');

function unless(test, then) {
    if (!test) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}

console.log("repeat function...");
repeat(3, function(n) {
    unless(n % 2, function() {
        console.log(n, "is even");
    });
});

console.log("filter, map, reduces function...");
//Compose functions:  find the average age for men and women in data set

//setup data set
var ancestry = JSON.parse(ancestrydata);

//since high-order functions work on arrays, just need to implement functions on single array element
function age(p) {return p.died - p.born;}
function male(p) {return p.sex == "m";} //returns true if m
function female(p) {return p.sex == "f";} //returns true if f
function plus(a,b) {return a+b;}    //simply adds two values

function average(array) {
    var sum = array.reduce(plus);
    return sum/array.length;
}
console.log(ancestry);
console.log("calc age using map(age): "+ancestry.map(age));
console.log("sum age using reduce: "+ancestry.map(age).reduce(plus));
console.log("avg age for all: "+average(ancestry.map(age)));
console.log("filter males and calc age using map(age): "+ancestry.filter(male).map(age));
console.log("filter females and calc age using map(age): "+ancestry.filter(female).map(age));
console.log("avg age for male: "+average(ancestry.filter(male).map(age)));
console.log("avg age for female: "+average(ancestry.filter(female).map(age)));

