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
    const input_year = document.getElementById('year-number');
    const input_month = document.getElementById('month-number');
    const input_cvv = document.getElementById('CVV');
    const input_name = document.getElementById('cardholder-name');
    const input_number = document.getElementById('card-number');
    const user_list = new Array();

    // Iniciate some functions;
    function init() {
        getClick();
    }

    // Function to stop the default page reload when we click on submit;
    (function() {
        form.addEventListener('submit', e => e.preventDefault());
    })();

    // Function to get the elements that we click on;
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

    // Function to add the input value to the display value;
    function addDisplay(input, display, length) {
        input.addEventListener('keyup', e => {
            if (Number(input.value)) {
                try {
                    removeError(error);
                    removeError(error_2);
                    removeError(error_3);
                    const a = input.value.padEnd(length, '0').split('');
                    a.splice(4, 0, ' ');
                    a.splice(9, 0, ' ');
                    a.splice(14, 0, ' ');
                    display.value = a.join('');
                } catch {}
            } else {
                if (input.id === 'year-number') addError(input, error_2);
                if (input.id === 'month-number') addError(input, error_2);
                if (input.id === 'card-number') addError(input, error);
                if (input.id === 'CVV') addError(input, error_3);
            }
            if (input.id === 'cardholder-name') {
                display.value = input.value;
                display.innerHTML = input.value;
            }
            
        })
    }

    // Create an Object from a Class;
    class Card {
        constructor(name, number, cvv, year, month) {
            this.name = name;
            this.card_number = number;
            this.cvv = cvv;
            this.year = year;
            this.month = month;
        }
    }

    // Save an Object and his attributes in an Array when we submit the form;
    button.addEventListener('click', e => {
        (function() {
            const user = new Card(input_name.value, Number(input_number.value), Number(input_month.value), Number(input_year.value), Number(input_cvv.value));
            user_list.push(user);
            console.log(user_list);
        })();
    })
    
    // Add some error messages;
    function addError(input, error) {
        if (input.id && input.value.length === 0) {
            error.value = "Can't be blank!"
            error.innerHTML = "Can't be blank!";
            error.style.display = 'block';
        } else {
            error.value = 'Wrong format, Numbers only!'
            error.innerHTML = 'Wrong format, Numbers only!'
            error.style.display = 'block';
        }
}

    function removeError(error) {
        error.style.display = 'none';
    }
    init();
})();