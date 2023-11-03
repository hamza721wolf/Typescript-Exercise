"use strict";
function createCar(manufacturer, modelName, ...options) {
    const car = Object.assign({ manufacturer, modelName }, options);
    return car;
}
const carInfo = createCar("Toyota", "Camry", color, "Blue", features, ["GPS", "Sunroof"]);
console.log(carInfo);
