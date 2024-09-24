class Person {
    constructor(name, age, country, birthplace) {
        this.name =  name;
        this.age = age;
        this.country = country;
        this.birthplace = birthplace;
    }
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
        console.log(`Birthplace: ${this.birthplace}`);
    }
}

const person1 = new Person('Rico Galang', 25, 'Australia', 'Manila');
const person2 = new Person('Richard Topaz', 40, 'Netherlands', 'Sucat');
const person3 = new Person('Pia Lim', 33, 'Singapore', 'Rizal');
const person4 = new Person('Pochie Albe', 26, 'Switzerland', 'Bicol');

console.log('Person-1 Details');
person1.displayDetails();

console.log('Person-2 Details');
person2.displayDetails();

console.log('Person-3 Details');
person3.displayDetails();

console.log('Person-4 Details');
person4.displayDetails();


