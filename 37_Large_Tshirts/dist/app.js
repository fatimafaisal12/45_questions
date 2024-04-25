"use strict";
function make_shirt(size = 'Large', message = 'I love typescript') {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}
make_shirt();
make_shirt('Medium');
make_shirt('small', 'i love python');
