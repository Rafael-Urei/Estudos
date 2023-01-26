const mainFunction = () => {

    const section = document.querySelector('.container');
    const div = document.createElement('div');

    const elementos = [
        {tag: 'p', texto: 'Isto é uma tag P'},
        {tag: 'div', texto: 'Isto é uma tag DIV'},
        {tag: 'section', texto: 'Isto é uma tag SECTION'},
        {tag: 'footer', texto: 'Isto é uma tag FOOTER'}
    ];

    const pegarElemento = () => {
        for (let i in elementos) {
            const { tag, texto } = elementos[i];
            insertElement(tag, texto);
        };
    };
    
    const insertElement = (tag, msg) => {
        const element = document.createElement(tag);
        const createdText = document.createTextNode(msg);
        element.appendChild(createdText);
        div.appendChild(element);
    };

    section.appendChild(div);
    pegarElemento();
}

mainFunction();

