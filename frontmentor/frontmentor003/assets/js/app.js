function Formulario() {

    this.formulario = document.getElementById('form')
    this.display_number_card = document.getElementById('front-card-number');
    this.card_number = document.getElementById('card-number');
    this.display_card_name = document.getElementById('front-card-name');
    this.card_name = document.getElementById('cardholder-name');
    this.display_month = document.getElementById('front-card-date')
    this.month = document.getElementById('month-number');
    this.display_year = document.getElementById('');
    this.year = document.getElementById('year-number');
    this.display_cvv = document.getElementById('back-card-cvv');
    this.cvv = document.getElementById('CVC');

    this.start = () => {
        this.captureClick();
    } 

    this.addDisplay = (element, display, id) => {
      element.addEventListener('keyup', e => {
            if (element.id === id) {
                display.value = element.value;
                display.innerHTML = element.value;
            }
        })
    }

    this.captureClick = () => {
        this.formulario.addEventListener('click', event => {
            const element = event.target;
            if (element.id === 'card-number') this.addDisplay(this.card_number, this.display_number_card, element.id);
            if (element.id === 'cardholder-name') this.addDisplay(this.card_name, this.display_card_name, element.id);
            if (element.id === 'month-number') this.addDisplay(this.month, this.display_month, element.id);
            if (element.id === 'year-number') this.addDisplay(this.year, this.display_year, element.id);
            if (element.id === 'CVC') this.addDisplay(this.cvv, this.display_cvv, element.id);
        })
    }
}

const formulario = new Formulario();
formulario.start();