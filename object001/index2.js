const clientes = [];

function Cliente(nome) {
    this.perguntaDados = () => {const nome = prompt('Qual seu nome completo? '); return nome;}

    this.separaNome = nome => {
        const listaNome = nome.split(' ');
        const primeiroNome = listaNome.splice(0, 1).join(' ');
        return primeiroNome;
    };

    this.nome = this.separaNome(nome);

    this.separaSobrenome = nome => {
        const listaNome = nome.split(' ');
        const sobrenome = listaNome.splice(1, Number.MAX_VALUE).join(' ');
        return sobrenome;
    };

    this.sobrenome = this.separaSobrenome(nome);
}

const p1 = new Cliente(perguntaDados());

const cadastraCliente = cliente => clientes.push(cliente);

cadastraCliente(p1);
console.log(clientes);