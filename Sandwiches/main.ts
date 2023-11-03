function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order Summary:");
    console.log("Bread: Whole Wheat");
    console.log("Fillings: " + items.join(", "));
    console.log("Enjoy your sandwich!");
    console.log("\n");
}


orderSandwich("Turkey", "Swiss cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Cheddar cheese");
orderSandwich("Chicken");
