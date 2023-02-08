const numbers = [1, 2, 3, 4, 5, 6, 7];
const par = numbers.filter(value => value % 2 === 0).map(value => value * 2).reduce((acumulator, value) => acumulator += value);
console.log(par);