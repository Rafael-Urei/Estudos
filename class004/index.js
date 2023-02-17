function getLastDigits(firstNumbers) {
    let i = firstNumbers.length + 1;
    const listForSum = []

   firstNumbers.forEach(e => {
        const element = e * i--;
        listForSum.push(element);
    });

    const sum =listForSum.reduce((acumulator, value) => acumulator += value);

    const oneNumber = number => number = 11 - (sum % 11);

    if (oneNumber(0) > 9) {
        return 0;
    } else {
        return oneNumber(0);
    }
    
}

const addLastDigits = list => list.push(getLastDigits(list));

const numbersList = [9, 9, 9, 9, 9, 9, 9, 8, 9];
addLastDigits(numbersList);
addLastDigits(numbersList);
console.log(`Os últimos digitos do seu CPF são: ${numbersList[9]} e ${numbersList[10]}`);
