function* geradora1() {
    let value = 'Valor 1'
    yield value;
    value = 'Valor 2'
    yield value;
    value = 'Valor 3'
    yield value;
}

function recursiva(max = 0) {
    if (max >= 4) return;
    console.log(g1.next());
    max++;
    recursiva(max)
}

const g1 = geradora1();
recursiva();


function* geradora2() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora3() {
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;
}

const g3 = geradora3();
for (let valor of g3) {
    console.log(valor);
}

function* geradora5() {
    yield 
}