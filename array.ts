const car: string[] = [];
// const carPrice: number[] = [];
const carPrice: Array<number> = [];

type Driver = {
    name: string;
    isActive: boolean;
}

const allDrivers: Driver[] = [];
const MLModels: number[][] = [
    [255, 0, 0],
];

car.push('Tata Punch');
carPrice.push(600000);
console.log(car, carPrice);

allDrivers.push({name: 'John', isActive: true});

export {};