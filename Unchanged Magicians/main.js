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
// Create a copy of the array of magicians' names
const magicianNamesCopy = [...magicianNames];
// Modify the copied array of magicians
const greatMagicians = makeGreat(magicianNamesCopy);
// Call the function to show the original magicians
console.log("Original Magicians:");
showMagicians(magicianNames);
// Call the function to show the modified magicians
console.log("\nModified Magicians:");
showMagicians(greatMagicians);
