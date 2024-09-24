class Vehicle {
    constructor(make, model, year, owner) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.owner = owner;
    }
    displayDetails(){
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Owner: ${this.owner}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, owner, doors){
        super(make, model, year, owner);
        this.doors = doors;
    }
       displayDetails() {
    super.displayDetails();
        console.log(`Doors: ${this.doors}`);
       }
    }

    const Joshua = 'Joshua';
    const Rica = 'Rica' ;

const vehicle = new Vehicle ('Ford', 'F-150', 2020, Joshua);
console.log('Vehicle Details: ');
vehicle.displayDetails();

const car = new Car ('Honda', 'Accord', 2023, Rica, 4);
console.log('\nCar Details:');
car.displayDetails();