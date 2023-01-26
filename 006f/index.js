function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Rafael');
console.log(funcao(), funcao2());
