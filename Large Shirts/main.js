"use strict";
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`The T-shirt is size ${size} and it has the message: "${message}".`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "TypeScript is awesome!");
