//const chave = 'nome';
//console.log(pessoa[chave]); // Posso colocar valor dinâmico.
//console.log(pessoa['sobrenome']);

const pessoa1 = new Object();
pessoa1.nome = 'Rafael';
pessoa1.sobrenome = 'Souza';
pessoa1.idade = 22;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu sobrenome...`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());
