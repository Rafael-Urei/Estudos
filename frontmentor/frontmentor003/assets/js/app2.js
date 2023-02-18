(function() {
    const form = document.getElementById('form');
    const numberCard = document.getElementById('front-card-number');
    const nameCard = document.getElementById('front-card-name');
    const cvv = document.getElementById('back-card-cvv');
    const year = document.getElementById('front-card-year');
    const month = document.getElementById('front-card-month');
    const button = document.getElementById('confirm-button');
    const error = document.querySelector('#error');
    const error_2 = document.querySelector('#error2');
    const error_3 = document.querySelector('#error3');
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
            if (element.id === 'card-number') addDisplay(element, numberCard, numberCard.value.length);
            if (element.id === 'cardholder-name') addDisplay(element, nameCard, nameCard.value.length);
            if (element.id === 'CVV') addDisplay(element, cvv, cvv.value.length);
            if (element.id === 'year-number') addDisplay(element, year, year.value.length);
            if (element.id === 'month-number') addDisplay(element, month, month.value.length);
        })
    }

    function addDisplay(input, display, length) {
        input.addEventListener('keyup', e => {

            if (Number(input.value)) {
                try {
                    addError(input, error_2, false)
                    const a = input.value.padEnd(length, '0').split('');
                    a.splice(4, 0, ' ');
                    a.splice(9, 0, ' ');
                    a.splice(14, 0, ' ');
                    display.value = a.join('');
                } catch {
                    
                }
            } else {
                addError(input, error_2, true);
            }

            if (input.id === 'cardholder-name') {
                display.value = input.value;
                display.innerHTML = input.value;
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

    function addError(input, e, condition) {
        if (input.id === 'year-number') {
            e.innerHTML = 'Error!'
        }
    }

    init();
})();

