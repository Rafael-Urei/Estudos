const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`);
}