// FUNCTIONS

const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number) => {
    return a - b
}

// add(1); // error
// subtract(1, 2); //okay

const greeting = (name: string, greeting: string) => {
    return `${greeting} ${name}`
}

// const greet = greeting('Sam', 'Hello'); // Infer

