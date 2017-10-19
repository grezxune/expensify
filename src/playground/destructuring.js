// Object Destructuring

// const person = {
//     // name: 'Tommy',
//     age: 25,
//     location: {
//         city: 'Marshfield',
//         temp: 55
//     }
// };

// const name = person.name;
// const age = person.age;
// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// Array Destructuring

const address = ['2107 S Washington Ave', 'Marshfield', 'Wisconsin', '54449'];

console.log(`You are in ${address[1]} ${address[2]}.`);

const [, city, state] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, ,price] = item;
console.log(`A medium ${coffee} costs ${price}`);