function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        altura,
        peso,

        fala: function(assunto = 'Dark Souls') {
            return `${ this.nomeCompleto } estão falando sobre: ${assunto}.`
        },

        get imc() {
            const i = this.peso / (this.altura ** 2);
            return i.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Rafael', 'Souza', 1.86, 73.55);
const p2 = criaPessoa('Gabriel', 'Hernandes', 1.82, 83.55);
p1.nomeCompleto = 'Rafael de Souza Silva';
p2.nomeCompleto = 'Gabriel Hernandes Alves da Silva'
console.log(`${p2.nomeCompleto} e ${p1.fala()}`);

