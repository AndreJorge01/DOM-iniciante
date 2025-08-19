//DOM para Iniciantes
//forEach e Arrow Function

//forEach
//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

const imgs = document.querySelectorAll("img");

imgs.forEach(function (item) {
  console.log(item);
});

//Parâmetros do forEach
//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;

const img = document.querySelectorAll("img");

img.forEach(function (valorAtual, index, array) {
  console.log(valorAtual); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

//forEach e Array
//forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

//Arrow Function
//Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

const imagen = document.querySelectorAll("img");

imagen.forEach((item) => {
  console.log(item);
});

//Parâmetros e Parênteses

const imagens = document.querySelectorAll("img");

// parâmetro único não precisa de parênteses
imagens.forEach((item) => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imagens.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
//let i = 0;
//imagens.forEach(() => {
// console.log(i++);
//});

//É melhor utilizar os parênteses

//Return
//É possível omitir as chaves {} para uma função que retorna uma linha.

const img2 = document.querySelectorAll("img");

img2.forEach((item) => console.log(item));

img2.forEach((item) => console.log(item));

//Não é permitido fechar a linha com ;

//Exercício

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});
// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});
// Como corrigir os erros abaixo:
const imgs3 = document.querySelectorAll("img");

imgs3.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs3.forEach(() => {
  console.log(i++);
});

imgs3.forEach(() => i++);
console.log(i);
