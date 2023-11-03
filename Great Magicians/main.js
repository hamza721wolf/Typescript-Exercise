"use strict";
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    return magicians.map(magician => `${magician} the Great`);
}
// Array of magician names
const magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Modify the array of magicians
const greatMagicians = makeGreat(magicianNames);
// Call the function to show the modified magicians
showMagicians(greatMagicians);
