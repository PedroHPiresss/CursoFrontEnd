//Funções de data e hora

let agora = new Date();
console.log(agora);

console.log(agora.toLocaleString());

// definição de um objeto da classe Date()
// para a variável agora

// Calculo com datas
let data1 = new Date("2025-01-23");
let data2 = new Date("2025-06-18");

let diferenca = data2 - data1;

console.log((diferenca/(1000*60*60*24)));