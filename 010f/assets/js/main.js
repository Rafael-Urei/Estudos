function createCalc() {
    return {
        display: document.querySelector('.display'),

        start: function() {
            this.cliquebtn();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', event => {
                if (event.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        deleteOne: function() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta: function() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },

        clearDisplay: function() {
            this.display.value = '';
        },

        cliquebtn: function() {
            document.addEventListener('click', (event) => {
                const el = event.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if(el.classList.contains('btn-equal')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculator = createCalc();
calculator.start();