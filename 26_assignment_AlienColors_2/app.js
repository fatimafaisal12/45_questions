"use strict";
//choose a color for an alien as you did in exercise 25
let alien_color = 'green';
//make if-else chain
// print a message when if  statement is true
//print a message in case else statement is true
if (alien_color === 'green') {
    // print a message when if  statement is true
    console.log("Player just earned 5 points for shooting the alien!");
}
else {
    console.log("Player just earned 10 ruppe!");
}
//if the alien color isn't green  print a message that player just earnned 10 points
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien!");
}
else {
    console.log("Player just earned 10 points!");
}
