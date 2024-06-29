// ARRAYS
let names: string[] = ['Sam', 'Cold', 'Hot'];
let ages2: Array<number> = [1, 2, 3, 4, 5];

// name.push(4) //error 
// ages2.push('hello') //error

let fruits = ['apple', 'banana', 'orange', 'pineapple', 'kiwi'];
const f = fruits[3]

let things = [1, 'hello', true, { name: 'Sam' }];
const t = things[3] //union types


//OBJECTS
let person: { name: string, age: number, country?: string } = {
    name: 'Sam',
    age: 30,
    country: 'USA'
}

person.name = 'Sam';
person.email = 'sam@me.com'; //error  We must stick to the type structure
person.country = 'Canada';


// Test Inference
let staff = {
    name: 'Sam',
    age: 30,
    country: 'USA'
}