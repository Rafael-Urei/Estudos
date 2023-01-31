function Pessoa() {

    this.nome = 'Rafael de Souza Silva'
    
    this.getFirstName = () => {
        const list_name = this.nome.split(' ');
        const firstName = list_name.splice(0, 1).join(' ');
        return firstName;
    };
    
    this.getLastName = () => {
        const list_name = this.nome.split(' ');
        const lastName = list_name.splice(1, Number.MAX_VALUE).join(' ');
        return lastName;
    };
}

const p1 = new Pessoa();
console.log(`Seu nome completo é: ${p1.getFirstName()} ${p1.getLastName()} : Seu primeiro nome é: ${p1.getFirstName()} : Seu Sobrenome é: ${p1.getLastName()};`);