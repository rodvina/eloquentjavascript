//eloquentjavascript.net
//filtering an array.  filter function needs to return boolean
function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}
var ancestrydata = require('./ancestry.js');
//setup data set
var ancestry = JSON.parse(ancestrydata);
//var ancestry = [
//    {"name": "Emma de Milliano", "sex": "f",
//        "born": 1876, "died": 1956,
//        "father": "Petrus de Milliano",
//        "mother": "Sophia van Damme"},
//    {"name": "Carolus Haverbeke", "sex": "m",
//        "born": 1832, "died": 1905,
//        "father": "Carel Haverbeke",
//        "mother": "Maria van Brussel"}
//]
console.log("oldschool filter");
console.log(filter(ancestry, function(person) {
    return person.born > 1800 && person.born < 1850;
}));

console.log("simpler filter");
console.log(ancestry.filter(function(person) {
    return person.born > 1800 && person.born < 1850;
}));
// ? [{name: "Philibert Haverbeke", …}, …]