function adicionaFinal (e1, e2, e3) {
    const stringLength = e1.length;
    const quantToAdd = e2 - stringLength;
    let newString = e1;

    for (let i = 0; i < quantToAdd; i++) {
        newString += e3;
    }
    return newString;
}

console.log(adicionaFinal('1234 1234', 16, '0'));

const str = '1234 1234';
const str2 = str.padEnd(16, '0');
console.log(str2);
const arr = [1, 2];
