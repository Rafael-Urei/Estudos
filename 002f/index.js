/*function soma() {
    let total = 0;
    for (let argument of arguments) {
        total += argument;
        console.log(total)
    }
};

soma(1, 2, 3)

console.log('###########')

function funcao (a, b = 0) {
    console.log(a + b);
};
funcao(1);

console.log('###########')

function funcao1 ({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
};
funcao1({nome: 'Rafael', sobrenome: 'Souza', idade: 21});

console.log('###########')

function funcao2 (cars) {
    for (let i of cars) {
        console.log(i)
    }
};

const cars = ['Uno', 'Pálio', 'BMW'];
funcao2(cars);*/

function conta(operador, acumulador, ...numeros) {
    for (let num of numeros) {
       if (operador === '+') acumulador+=num;
       if (operador === '-') acumulador-=num;
       if (operador === '/') acumulador/=num;
       if (operador === '*') acumulador*=num;
        console.log(acumulador);
    }
};

conta('/', 1, 20, 30, 40, 50)

function takeRest(...args) {
    console.log(args)
}

takeRest('+', 1, 20, 30, 40, 50);