function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

// Array of magician names
const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Modify the array of magicians
const greatMagicians = makeGreat(magicianNames);

// Call the function to show the modified magicians
showMagicians(greatMagicians);
