(function() {
    const form = document.getElementById('form');
    const numberCard = document.getElementById('front-card-number');
    const nameCard = document.getElementById('front-card-name');
    const cvv = document.getElementById('back-card-cvv');
    const year = document.getElementById('front-card-year');
    const month = document.getElementById('front-card-month');
    const button = document.getElementById('confirm-button');
    const error_number_card = document.getElementById('error');
    const user_list = new Array();

    function init() {
        getClick();
    }

    (function() {
        form.addEventListener('submit', e => e.preventDefault());
    })();

    function getClick() {
        form.addEventListener('click', event => {
            const element = event.target;
            console.log(element);
            if (element.id === 'card-number') addInDisplay(element, numberCard, element.id);
            if (element.id === 'cardholder-name') addInDisplay(element, nameCard, element.id);
            if (element.id === 'CVV') addInDisplay(element, cvv, element.id);
            if (element.id === 'year-number') addInDisplay(element, year, element.id);
            if (element.id === 'month-number') addInDisplay(element, month, element.id);
        })
    }

    function addInDisplay(e, display, id) {
        e.addEventListener('keyup', (e2) => {

            if (e.id === 'cardholder-name') {
                if (e.value.length === 0) {
                    display.value = 'JANNE APPLESEED';
                    display.innerHTML = 'JANNE APPLESEED';
                } else {
                    display.value = e.value;
                    display.innerHTML = e.value;
                }

            } else if (e.id === 'month-number' || e.id === 'year-number'){
                if (e.value.length <= 2) {
                    if (e2.key === 'Backspace') {
                        display.value = '00';
                        display.innerHTML = '00';
                    } else if (e.id === 'year-number'){
                        display.value = e.value;
                        display.innerHTML = e.value;
                    } else {
                        display.value = e.value + '/';
                        display.innerHTML = e.value + '/';
                    }
                }
            } else if (e.id === 'card-number') {
                try {
                    let warn = Number(e.value);
                    if (!warn) {
                        error_number_card.innerHTML = ''
                        error_number_card.innerHTML = 'Wrong format, number only!'
                        e.classList.add('input_error');
                        display.value = '0000 0000 0000 0000';
                    }else {
                        error_number_card.innerHTML = ''
                        e.classList.remove('input_error');
                        display.value = e.value;
                        display.innerHTML = e.value;
                    }
                } catch {
                }
            }
        })
    }

    class Card {
        constructor(name, number, cvv, year, month) {
            this.name = name;
            this.card_number = number;
            this.cvv = cvv;
            this.year = year;
            this.month = month;
        }
    }

    button.addEventListener('click', e => {
        (function() {
            const user = new Card(nameCard.value, numberCard.value, cvv.value, year.value, month.value);
            user_list.push(user);
            console.log(user_list);
        })();
    })

    function replace(string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + replace.length);
    }
    
    init();
})();

