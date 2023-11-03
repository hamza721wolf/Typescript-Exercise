"use strict";
let personName = "Hamza";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
let words = personName.split("");
let titlecase = "";
for (let i = 0; i < words.length; i++) {
    titlecase + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + "";
}
console.log(titlecase);
