"use strict";
let u = true;
console.log(u);
console.log('hey');
const json = JSON.parse('44');
console.log(typeof json);
const names = [];
names.push('maria');
// will throw errow if i try to add different type
// names.push(3);
console.log(names);
// Readonly
const names2 = ['maria2'];
// can't modify the array because of the "readonly" keyword
// names2.push("jane");
// Tuple
let myTuple;
myTuple = [5, 'hello', false];
console.log(myTuple);
myTuple.push('hi', 'today', true);
console.log(myTuple);
// named tuple
const graph = [33.4, 45.2];
console.log(graph);
// Object Types
const car = {
    type: 'Citroen',
    model: 'C3',
    year: 2003,
};
console.log(car);
car.year = 2002;
console.log(car);
// optional property
const car2 = {
    type: 'Citroen',
    model: 'C3',
    year: 2003,
};
car.mileage = 222002;
console.log(car);
// index signatures
const nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
// ENUMS
/**
 * An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric. Lets start with numeric.

Numeric Enums - Default
By default, enums will initialize the first value to 0 and add 1 to each additional value:
 */
var CardinalDirecttions;
(function (CardinalDirecttions) {
    CardinalDirecttions[CardinalDirecttions["North"] = 0] = "North";
    CardinalDirecttions[CardinalDirecttions["East"] = 1] = "East";
    CardinalDirecttions[CardinalDirecttions["South"] = 2] = "South";
    CardinalDirecttions[CardinalDirecttions["West"] = 3] = "West";
})(CardinalDirecttions || (CardinalDirecttions = {}));
let currentDirection = CardinalDirecttions.North;
console.log(currentDirection); //logs 0
currentDirection = CardinalDirecttions.South;
console.log(currentDirection); //logs 2
// initalizing Enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Sucess"] = 200] = "Sucess";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// STRING ENUMS
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
const carYear = 2001;
const carType = 'Citroen';
const carModel = 'C3';
const car3 = {
    year: carYear,
    model: carModel,
    type: carType,
};
const rectangle = {
    height: 20,
    width: 30,
};
const coloredRect = {
    height: 20,
    width: 10,
    color: 'red',
};
// Union Type
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode('404');
// TS Fucntions
// return type
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
// void Return type
function printHello() {
    console.log('Hello');
}
// Parameters
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 5));
// Optional Parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
//Default params
function pow(value, exponent = 10) {
    return value ** exponent;
}
console.log('pow' + pow(2));
// Rest Parameters
function add2(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add(2, 4, 10));
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction = (value) => value * -1;
// Type casting with 'as'
let x = 'hello';
console.log(x.length);
let y = 4;
console.log(y.length); // prints undefined since numbers don't have a length
// Type casting with '<>'
let z = 'hello';
console.log(z.length);
// Force casting
//To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let xy = 'hello';
console.log(xy.length);
// Classes
class Person {
    constructor() {
        this.name = '';
        this.name = 'jane';
    }
}
const person = new Person();
console.log(person); //Takes name from constructor
person.name = 'Maria';
console.log(person);
class Dog {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const dog = new Dog('doggo');
console.log(dog);
console.log('using get ' + dog.getName());
class Rectangle1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
// Generics with functions
function createPairs(v1, v2) {
    return [v1, v2];
}
console.log(createPairs('hello', 42));
// Generics with generalized classes like Map
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
const wrappedValue = { value: 10 };
