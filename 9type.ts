 // TYPE

//  TYPE ALIASES
 type RGB = [number, number, number];

 const randomColor = (): RGB => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
 }

 const color1 = randomColor();
 const color2 = randomColor();

//  console.log(color1, color2)


//OBJECT LITERAL
type User = {
    name: string,
    score: number
}

const user3: User = {
    name: 'Sam',
    score: 10
}

function formatUser(user: User) {
    console.log(`Name: ${user.name} Score: ${user.score}`);

}