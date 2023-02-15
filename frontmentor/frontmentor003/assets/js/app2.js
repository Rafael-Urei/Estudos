(function() {
    const form = document.getElementById('form');
    const numberCard = document.getElementById('front-card-number');
    const nameCard = document.getElementById('front-card-name');

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
        })
    }

    function addInDisplay(e, display, id) {
        e.addEventListener('keyup', () => {
            if (e.id === id) {
                display.value = e.value;
                display.innerHTML = e.value;
            }
        })
    }

    init();
})();

