const form = document.getElementById('form');
const numberCard = document.getElementById('front-card-number');
const nameCard = document.getElementById('front-card-name');
const cvv = document.getElementById('back-card-cvv');
const year = document.getElementById('front-card-year');
const month = document.getElementById('front-card-month');

form.querySelector('.cardholder-name').addEventListener('keyup', e => {
    if (nameCard.length === 0) {
        nameCard.innerHTML = "JANE APPLESEED";
    }
})

