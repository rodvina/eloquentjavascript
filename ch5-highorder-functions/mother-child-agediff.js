//Exercise: compute the avg age difference b/w mother and children

var ancestryfile = require('./ancestry.js');
var ancestrydata = JSON.parse(ancestryfile);

function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}

//create map of objects using name as the key. this will allow you to find
//mother
var byName = {};
ancestrydata.forEach(function(person) {
    byName[person.name] = person;
});

//returns mother's age based on calcuation between person's birth and mother's birth
function calcMotherAge(p) {
    console.log("person: " + JSON.stringify(p));
    var mother = byName[p.mother]
    var mother_age = p.born - mother.born;
    console.log("mother: " + p.mother + ", age: " + mother_age);
    return mother_age;
}

function hasKnownMotherByAge(age) {
    return age > 0;
}

//returns true if mother exists
function hasKnownMother(child) {
    return byName[child.mother] != undefined;
}

//console.log(average(ancestrydata.map(calcMotherAge).filter(hasKnownMotherByAge)));
//average the mother's age after filtering out those with no mothers
console.log(average(ancestrydata.filter(hasKnownMother).map(calcMotherAge)));
