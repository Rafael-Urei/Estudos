//Altera valores do meu array, recebemos um array exatamente do mesmo tamanho do original, porém com valores alterados.

const numbers = [5, 10, 67, 2, 15, 19, 76, 43, 29];
const doubleOfNumbers = numbers.map(value => value * 2);
console.log(doubleOfNumbers);

const people = [
    {name: 'Rafael', age: 64},
    {name: 'Gabriel', age: 21},
    {name: 'Caio', age: 25},
    {name: 'Marcos', age: 24},
    {name: 'Adriano', age: 22},
    {name: 'Igor', age: 22}
];

const names = people.map(object => object.name);
const removeName = people.map(object => ({ age: object.age }));



const setId = people.map( object => {
    function getRandomId(max = 9999999) {
        const id = Math.floor(Math.random() * max);
        return id;
    }
    const newObject = {...object}
    newObject.id = getRandomId();
    return newObject;
})

console.log(names);
console.log(removeName);
console.log(setId);
console.log(people);