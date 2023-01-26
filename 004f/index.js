function createMultiply(multiplicador) {
    return function (numero) {
        return numero * multiplicador
    }
}

const duplica = createMultiply(2);
const result = duplica(7)
console.log(result);