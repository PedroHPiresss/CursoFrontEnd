//operações Avançadas em Vetores (arrays)
let numeros = [10, 20, 30, 40, 50];

// map - percorre e faz uma ação
numerosNovos = numeros.map(x => x*3);
console.log(numerosNovos);

//filtros (filter) - Percorre e faz uma seleção
let numMaior20 = numeros.filter(x => x > 20);
console.log(numMaior20);

//reduce
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual,0);
console.log(soma); //150

//sort (organizador)

let aleatorio = [2, 5, 1, 3, 8, 6, 9, 0];
aleatorio.sort();
console.log(aleatorio);