// Vehicle Constructor
class Vehicle {
    constructor(name, model, weight, color) {
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.color = color;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Model: ${this.model}`);
        console.log(`Weight: ${this.weight}`);
        console.log(`Color: ${this.color}`);
    }
}

const vehicle1 = new Vehicle('Honda', 'Mobilio', '1500 kg', 'White');
const vehicle2 = new Vehicle('Toyota', 'Fortuner', '2000 kg', 'Blue');

console.log('Vehicle 1 Details:');
vehicle1.displayDetails();
console.log();  

console.log('Vehicle 2 Details:');
vehicle2.displayDetails();
