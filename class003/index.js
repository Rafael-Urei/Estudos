class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }
}

const controle1 = new ControleRemoto('LG');

for (let i = 0; i <= 10; i++) {
    console.log(controle1.volume);
    controle1.aumentarVolume();
}

console.log(controle1);