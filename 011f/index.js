function Pessoa(nome, sobrenome, identification) {
    
    const id = (max = 999999, min = 0) => {
        identification = Math.floor(Math.random() * (max - min + 1) + min);
        return identification;
    };

    this.id = id();
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método!')
    };

    addPerson(people, this);
}

function addPerson(list, person) {
    list.push(person);
}

const people = [];
const p1 = new Pessoa('Rafael', 'Souza');
console.log(people);
p1.metodo();
console.log(p1.id)