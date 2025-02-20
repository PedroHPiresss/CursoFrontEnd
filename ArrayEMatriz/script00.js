// array e matrizes

//declaração de um array
let dados = []; // o uso do colchetes permite a declaração de um array

let numeros = [1,2,3,4,5,6,7,8,9];
let palavras = ["Bola", "Sapato", "Caixa"];

console.log(numeros.length); //quantidades de elementos do array

//Índices do array

//Imprimir o 5º elemento de um array
console.log(numeros[4]); // 5

//adicionar elementos em um array
palavras.push("Cachorro"); // no final do array
console.log(palavras);

palavras.unshift("Prédio");
console.log(palavras);

// Remover Elementos
palavras.pop(); //remove o último elemento
console.log(palavras);

palavras.shift(); //remove o primeiro elemento
console.log(palavras);

//forEach - repetição em um vetor
palavras.forEach(palavra => {
    console.log(palavra);
});

//Splice

palavras.splice(1,1); //remover "Sapato"
console.log(palavras);

//Manupulação de arrays
let numerosDobro = numeros.map(x => x*10);
console.log(numerosDobro);