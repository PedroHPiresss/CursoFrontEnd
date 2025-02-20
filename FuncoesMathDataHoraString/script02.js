// Funções de String (texto)

var texto = "Aula de JavaScript";
console.log(texto.length); //contar o número de caracteres

console.log(texto.toUpperCase()); //tudo maiúsculo
console.log(texto.toLowerCase()); //tudo minúsculo

// Manipulação de Texto
console.log(texto.substring(0,4)); // Aula
console.log(texto.slice(-10)); // JavaScript
console.log(texto.replace("JavaScript" , "TypeScript"));

// split (usar um caracter em comum para separar em um vetor)

let linguagens = "JavaScript,c++,Python,Java,PHP";
let arrayLinguagens = linguagens.split(", ")
console.log(arrayLinguagens);

// Trim (tesoura)
let tesoura = "  JavaScript  ";
console.log(tesoura);
console.log(tesoura.trim());