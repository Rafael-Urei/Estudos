const div = document.querySelector('.p_container');
const paragraphs = div.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;
console.log(backgroundColorBody);

for (let i of paragraphs) {
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = 'white';
    i.style.width = '500px';
    i.style.textAlign = 'center'
}