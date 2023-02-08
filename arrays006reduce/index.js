const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const soma = numbers.reduce(function(acumulator, value, index, array) {
    acumulator += value;
    return acumulator;
}, 0);

console.log(soma);

const par = numbers.reduce((acumulator, value) => {
    if (value % 2 === 0) acumulator += value;
    return acumulator;
}, 0)

console.log(par)

const people = [
    {name: 'Rafael', age: 78},
    {name: 'Gabriel', age: 21},
    {name: 'Caio', age: 25},
    {name: 'Marcos', age: 24},
    {name: 'Adriano', age: 22},
    {name: 'Igor', age: 22}
];

const older = people.reduce(function(acumulator, object, index, array) {
    if (acumulator.age > object.age) return acumulator;
    return object;
})

console.log(older);