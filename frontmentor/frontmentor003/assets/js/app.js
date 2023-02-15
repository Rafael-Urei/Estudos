function Formulario() {

    this.formulario = document.getElementById('form')
    this.display_number_card = document.getElementById('front-card-number');
    this.display_card_name = document.getElementById('front-card-name');
    this.display_month = document.getElementById('front-card-date')
    this.display_year = document.getElementById('');
    this.display_cvv = document.getElementById('back-card-cvv');
    this.confirm_button = document.getElementById('confirm-button');
    this.display_error_message = document.querySelector('#error');

    this.start = e => this.captureClick();

    this.formulario.addEventListener('submit', e => e.preventDefault());

    this.captureClick = () => {
        this.formulario.addEventListener('click', event => {
            const element = event.target;
            if (element.id === 'card-number') this.addDisplay(element, this.display_number_card, element.id);
            if (element.id === 'cardholder-name') this.addDisplay(element, this.display_card_name, element.id);
            if (element.id === 'month-number') this.addDisplay(element, this.display_month, element.id);
            if (element.id === 'year-number') this.addDisplay(element, this.display_year, element.id);
            if (element.id === 'CVV') this.addDisplay(element, this.display_cvv, element.id);
            if (element.id === 'confirm-button') {
                this.verifyCardNumber(this.display_number_card.value);
            } 
        })
    }

    this.addDisplay = (element, display, id) => {
      element.addEventListener('keyup', e => {
            if (element.id === id) {
                display.value = element.value;
                display.innerHTML = element.value;
            }
        })
    }

    this.verifyCardNumber = () => {
        try {
            const cardnumber = Number(this.display_number_card.value);
            if (!Number.isInteger(cardnumber)) {
                this.display_error_message.innerText = 'Wrong format! Numbers only.';
                return
            } else {
                this.display_error_message.innerText = '';
            }
            } catch {
        }
    }

    this.formataNumero = (toFormat) => {
        for (i in toFormat) {
            if (i % 5 === 0) {
                toFormat = toFormat.substr(0, i)+' '+toFormat.substr(i);
            }
        }
        toFormat = toFormat.substr(1, toFormat.length);
        console.log(toFormat);
        return toFormat
    }

    this.criaObjeto = (name, cardNumber, cvv) => {
        return {
            name: name,
            cardNumber: cardNumber,
            cvv: cvv
        }
    }
}

const formulario = new Formulario();
formulario.start();