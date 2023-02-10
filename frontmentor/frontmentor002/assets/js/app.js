const card = document.querySelectorAll('.card');
const cards = []
getListOfNodeList(cards, card);

function start() {
    addEvent(cards);
}

function getListOfNodeList(list, nodelist) {
    for (i of nodelist) {
        list.push(i);
    }
    return list;
}

const addEvent = (listCard) => {
    listCard.forEach(el => {
        el.addEventListener('click', e => {
            changeSize(el);
            rotateImage(el.children[1].children[0]);
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

const rotateImage = (element) => {
    console.log(element);
    if (element.classList.contains('img2')) {
        element.classList.remove('img2');
    } else {
        element.classList.add('img2');
    }
}

start();