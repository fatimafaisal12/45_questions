"use strict";
const magicians = ["Hooria", "Harry Potter", "Sameer", "usama"];
function make_great(magiciansarray) {
    for (let index = 0; index < magiciansarray.length; index++) {
        magicians[index] = "The Great " + magiciansarray[index];
    }
}
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
make_great(magicians);
show_magicians(magicians);
