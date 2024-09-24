let obj = {};

let person = {
    name: "Patricia",
    age: 96,
};
    Object.setPrototypeOf(obj, person);
    
    console.log(Object.getPrototypeOf(obj));

    console.log(Object.getPrototypeOf(obj) === person);
