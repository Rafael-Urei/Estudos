const cpf = '067.514.241-59';
const cpfFormatado = cpf.replace(/\D+/g, '');
const cpfArray = Array.from(cpfFormatado);
cpfArray.pop(-1);
cpfArray.pop(-2);

function pegarDigito(list) {
    const cpfMultiplicado = [];
    let i = list.length + 1;
    
    list.forEach(element => {
        let elemento = Number(element)
        const number = elemento *= i--;
        cpfMultiplicado.push(number);
    });

    const soma = cpfMultiplicado.reduce((acumulator, value) => {
        acumulator = acumulator + value;
        return acumulator;
    }, 0)

    const digito = 11 - (soma % 11);

    if (digito > 9) {
        return 0;
    } else {
        return digito;
    }
};

const adicionarDigito = list => list.push(pegarDigito(cpfArray));
adicionarDigito(cpfArray);
adicionarDigito(cpfArray);
console.log(cpfArray);