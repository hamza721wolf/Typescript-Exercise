
const placesToVisit: string[] = ["Tokyo", "Paris", "Machu Picchu", "Santorini", "Bora Bora"];


console.log("Original Order: " + placesToVisit.join(', '));

const sortedAlphabetically = [...placesToVisit].sort();
console.log("Alphabetical Order: " + sortedAlphabetically.join(', '));

console.log("Original Order (after sorting): " + placesToVisit.join(', '));


const sortedReverseAlphabetically = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order: " + sortedReverseAlphabetically.join(', '));


console.log("Original Order (after reverse sorting): " + placesToVisit.join(', '));


placesToVisit.reverse();
console.log("Reversed Order: " + placesToVisit.join(', '));


placesToVisit.reverse();
console.log("Original Order (after double reversing): " + placesToVisit.join(', '));

placesToVisit.sort();
console.log("Alphabetical Order (after sorting): " + placesToVisit.join(', '));

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order (after sorting): " + placesToVisit.join(', '));
