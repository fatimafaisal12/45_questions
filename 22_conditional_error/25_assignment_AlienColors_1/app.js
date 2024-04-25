"use strict";
// create a variable called alien color
let alien_color = 'green';

// write an statement to test whether an alien color is green. if it is, then print a message that player just earned 5 points.
if (alien_color === 'green') {
    console.log('player just earned 5 points');
}

//write one version of this program that passes the if test and another fails it.
alien_color = 'yellow';

//the version that fails have no output
if (alien_color === 'green') {
    console.log('player just earned 5 points');
}
