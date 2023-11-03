"use strict";
const colors = ["Red", "Green", "Blue"];
// Intentional error: Accessing an index that is out of bounds
const color = colors[3];
// Correcting the error
if (color) {
    console.log(`The selected color is: ${color}`);
}
else {
    console.log("Oops! Index error. Please choose a valid color index.");
}
