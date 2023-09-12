let u = true;
console.log(u);
console.log('hey');

const json = JSON.parse('44');
console.log(typeof json);

const names: string[] = [];
names.push('maria');
// will throw errow if i try to add different type
// names.push(3);
console.log(names);

// Readonly
const names2: readonly string[] = ['maria2'];
// can't modify the array because of the "readonly" keyword
// names2.push("jane");

// Tuple

let myTuple: [number, string, boolean];
myTuple = [5, 'hello', false];
console.log(myTuple);
myTuple.push('hi', 'today', true);
console.log(myTuple);

// named tuple
const graph: [x: number, y: number] = [33.4, 45.2];
console.log(graph);

// Object Types
const car: { type: string; model: string; year: number; mileage?: number } = {
  type: 'Citroen',
  model: 'C3',
  year: 2003,
};
console.log(car);
car.year = 2002;
console.log(car);

// optional property
const car2: { type: string; model: string; year: number; mileage?: number } = {
  type: 'Citroen',
  model: 'C3',
  year: 2003,
};

car.mileage = 222002;
console.log(car);

// index signatures
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// ENUMS
/**
 * An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric. Lets start with numeric.

Numeric Enums - Default
By default, enums will initialize the first value to 0 and add 1 to each additional value:
 */
enum CardinalDirecttions {
  North,
  East,
  South,
  West,
}

let currentDirection = CardinalDirecttions.North;
console.log(currentDirection); //logs 0
currentDirection = CardinalDirecttions.South;
console.log(currentDirection); //logs 2

// initalizing Enums
enum StatusCodes {
  NotFound = 404,
  Sucess = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);

// STRING ENUMS
enum CardinalDirections {
  North = 'North',
  East = 'East',
  South = 'South',
  West = 'West',
}
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);

// ALIASES
type CarYear = number;
type CarModel = string;
type CarType = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = 'Citroen';
const carModel: CarModel = 'C3';
const car3: Car = {
  year: carYear,
  model: carModel,
  type: carType,
};

// Interfaces
interface Rectangle {
  height: number;
  width: number;
}
const rectangle: Rectangle = {
  height: 20,
  width: 30,
};

// Extending Interfaces

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRect: ColoredRectangle = {
  height: 20,
  width: 10,
  color: 'red',
};

// Union Type
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode('404');

// TS Fucntions
// return type
function getTime(): number {
  return new Date().getTime();
}
console.log(getTime());
// void Return type
function printHello(): void {
  console.log('Hello');
}

// Parameters
function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(3, 5));

// Optional Parameters
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

//Default params
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
console.log('pow' + pow(2));

// Rest Parameters
function add2(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add(2, 4, 10));
/**
 * Type Alias
Function types can be specified separately from functions with type aliases.
 */
type Negate = (value: number) => number;
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

// Type casting with 'as'
let x: unknown = 'hello';
console.log((x as string).length);
let y: unknown = 4;
console.log((y as string).length); // prints undefined since numbers don't have a length

// Type casting with '<>'
let z: unknown = 'hello';
console.log((<string>z).length);

// Force casting
//To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let xy = 'hello';
console.log((xy as unknown as string).length);

// Classes
class Person {
  name: string = '';
  constructor() {
    this.name = 'jane';
  }
}

const person = new Person();
console.log(person); //Takes name from constructor
person.name = 'Maria';
console.log(person);

class Dog {
  private name: string = '';

  public constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}
const dog = new Dog('doggo');
console.log(dog);
console.log('using get ' + dog.getName());

// Inheritance: Implements
interface Shape {
  getArea: () => number;
}

class Rectangle1 implements Shape {
  public constructor(
    protected width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

// Generics with functions

function createPairs<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPairs<string, number>('hello', 42));

// Generics with generalized classes like Map
class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10

// Generiacs in type Aliases
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };
