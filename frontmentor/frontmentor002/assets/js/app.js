const card = document.querySelector('.card');
const cards = getListOfNodeList();

function start() {
    addEvent()
}

function getListOfNodeList() {
    const card = document.querySelectorAll('.card');
    const cards = [];
    for (i of card) {
        cards.push(i);
    }
    return cards;
}

const addEvent = () => {
    cards.forEach(el => {
        el.addEventListener('click', e => {
            changeSize(el);
        })
    })
} 

const changeSize = element => {
    if (element.classList.contains('card2')) {
        element.classList.remove('card2');
    } else {
        element.classList.add('card2');
    }
}

function backSize(element) {
    const default_ = element.style.transform = 'scale(1)';
    return default_;
}

start();