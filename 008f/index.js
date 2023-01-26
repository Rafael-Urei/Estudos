//IIFE === Imediately Invoked Function Expression.

(function () {
    const nome = 'Rafael';
    function criaNome(sobrenome) {
        return `${nome} ${sobrenome}`
    }

    (falaNome = () => { console.log(criaNome('Souza')); })();
    
})();