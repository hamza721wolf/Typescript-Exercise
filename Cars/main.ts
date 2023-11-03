function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): any {
    const car = { manufacturer, modelName, ...options };
    return car;
}

const carInfo = createCar("Toyota", "Camry", color: "Blue", features: ["GPS", "Sunroof"]);

console.log(carInfo);
