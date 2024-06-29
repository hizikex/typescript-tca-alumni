//Union Types
let email: string | null;

email = 'sam@me.com';
email = null;

type Id = string | number;

let id1: Id = 10;
let id2: Id = 'hello';

//PITFALL OF UNION TYPE
const checkId = (id: Id) => {
    parseInt(id)

    return id
};

checkId('10');

// TYPE GUARD
const checkIdType = (id: Id) => {
    if (typeof id === 'string') {
        //Can use string methods
    } else {
        // Can use number methods
    }

    return id
};

checkIdType('10');
checkIdType(10);


// tagged interfaces
interface Users {
    type: 'users' //add type guard
    username: string
    email: string,
    id: Id
}

interface Person {
    type: 'person' // add type guard
    firstname: string;
    age: number;
    id: Id
}

function logDetails(value: Users | Person) {
    if (value.type === 'users') {
        //you can only access values in users
    } else {
        //you can only access values in person
    }
}