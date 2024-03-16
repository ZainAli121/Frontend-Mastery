class Myclass{
    #a; // private value
    b;
    constructor(value1, value2){ // constructor
        this.#a = value1;
        this.b = value2;
    }

    // set method for private value
    set setData(value){  
        this.#a = value;
    }

    // get method for private value
    get getData(){
        return this.#a;
    }



    printSum(){
        console.log(`THe sum is ${this.#a+this.b}`);
    }
}

const myObj = new Myclass(10, 20); // obj
myObj.setData = 40; // set data 
console.log(myObj);
myObj.printSum();
console.log(myObj.getData);  // get data 


class Vehicle{
    type;

    constructor(type){
        this.type = type;
    }

    printDetails(){
        console.log(`The vehicle type is ${this.type}`)
    }

}

const car = new Vehicle("Car");
car.printDetails();

class Car extends Vehicle{
    name;
    model;
    color;

    constructor(type,name, model, color){
        super(type);
        this.name = name;
        this.model = model;
        this.color = color;
    }

    printSpec(){
        console.log(`The vehicel type is ${this.type}\nThe name is ${this.name}\nThe model is ${this.model}\nThe color is ${this.color}`)
    }

}

const carObj = new Car("Car", "BMW", 2024, "Black");
const carObj1 = new Car("Car", "Range Rover", 2023, "Black");

carObj.printSpec();
carObj1.printSpec();
