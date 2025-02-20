//funções Matemáticas

//Sqrt //Pow
//Raiz quadrada de 25
console.log(Math.sqrt(25)); //5

//Potência
console.log(Math.pow(3,2)); //3² = 9
console.log(Math.pow(4,3)); //4³ = 64
console.log(Math.pow(27,1/3)); // 27^(1/3) = 3

// Arredondamento 
//Math.round (arredonda para o mais próximo)
console.log(Math.round(4.4)); //4
console.log(Math.round(4.7)); //5

//Math.flor (arredonda para baixo)
console.log(Math.floor(4.9)); //4

//Math.ceil (arredonda para cima)
console.log(Math.ceil(4.1)); //5

//números aleatórios
console.log(Math.random()); // Sorteia números entre 0 e 1

console.log(Math.ceil(Math.random()*100)); // Sorteia entre 1 e 100

console.log(Math.floor(Math.random()*100)); //Sorteia entre 0 e 99

console.log(Math.ceil(Math.random()*10000)); //Sorteia entre 1 e 10000

console.log(Math.floor(Math.random()*10000)); //Sorteia entre 0 e 9999

console.log(Math.round(Math.random()*50)); //Sorteia entre 0 e 50

console.log(Math.round(Math.random()*50+50)); //Sorteia entre 50 e 100

//Maximo, Mínimo, Absoluto
var numeros = [0,1,2,3,4,5,6,7,8,9]; //array
console.log(Math.max(numeros)); //vai pegar o maior número = 9
console.log(Math.min(numeros)); //vai pegar o menor número = 0
var absoluto = -10;
console.log(Math.abs(absoluto)); //10 //módulo do número





