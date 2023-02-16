class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando...`)
    }

    comer() {
        console.log(`${this.nome} está comendo...`)
    }

    beber() {
        console.log(`${this.nome} está bebendo...`)
    }
}

const pessoa1 = new Pessoa('Rafael', 'Souza');
const pessoa2 = new Pessoa('Gabriel', 'Hernandes');
const pessoa3 = new Pessoa('Marcos', 'Borges');
const pessoa4 = new Pessoa('Adriano', 'José');
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);