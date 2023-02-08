//Filter: Filtrar o array. Sempre retorna um array com a amesma quantidade de elementos ou menos.
//Map: Modificar o array. 
//Reduce: Reduzir o array em um único valor.

//Filter

/*const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const more = new Array();
const less = new Array();
for (i of numbers) {
    i >= 10 ? more.push(i) : less.push(i);
}

console.log(more);
console.log(less);*/

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const filters = numbers.filter(value => value >= 10);
console.log(filters);

const people = [
    {name: 'Rafael', age: 64},
    {name: 'Gabriel', age: 21},
    {name: 'Caio', age: 25},
    {name: 'Marcos', age: 24},
    {name: 'Adriano', age: 22},
    {name: 'Igor', age: 22}
];

const moreLetters = people.filter(obj => obj.name.length > 5);
const moreAge = people.filter(obj => obj.age > 50);
const lastLetterA = people.filter(obj => obj.name.toLowerCase().endsWith('l'));

console.log(moreLetters);
console.log(moreAge);
console.log(lastLetterA);