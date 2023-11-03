function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The T-shirt is size ${size} and it has the message: "${message}".`);
}

makeShirt();

makeShirt("Medium");

makeShirt("Small", "TypeScript is awesome!");
