const input = document.querySelector('.input');
const display = document.querySelector('.display');

function addDisplay() {
    input.addEventListener('keyup', e  => {
        const a = input.value.padEnd(16, '0').split('');
        a.splice(4, 0, ' ');
        a.splice(9, 0, ' ');
        a.splice(14, 0, ' ');
        display.value = a.join('');
    })
};

addDisplay();