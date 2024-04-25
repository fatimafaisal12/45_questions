"use strict";
const magicians = ["Hooria", "Harry Potter", "Sameer", "usama"];
function copyArray(arr) {
    return [...arr];
}
function make_great(magiciansarray) {
    for (let index = 0; index < magiciansarray.length; index++) {
        magiciansarray[index] = "The Great " + magiciansarray[index];
    }
}
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
const copyMagicianArray = copyArray(magicians);
make_great(copyMagicianArray);
console.log('This is my original array: ');
show_magicians(magicians);
console.log('This is my modified copy of the array: ');
show_magicians(copyMagicianArray);
