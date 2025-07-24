//ID
//getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

// Retorna null caso não exista
const naoExiste = document.getElementById("teste");

//Classe e Tag
//getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
//const gridSection = document.getElementsByClassName('grid-section');
//const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);

//Seletor Geral Único
//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li");

//Seletor Geral Lista
//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

// Retorna o segundo elemento
console.log(gridSection[1]);

//Diferente do getElementsByClassName, a lista aqui é estática

//HTMLCollection vs NodeList
//A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

//Array-Like
//HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

//É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)

// Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgName = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgName);
// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH1 = document.querySelector(".animais.descricao h2");
//ou
const h2Animais = animais.querySelector("h2");
console.log(primeiroH1);
console.log(h2Animais);
// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");

console.log(paragrafos[paragrafos.length - 1]);
//ou
console.log(paragrafos[--paragrafos.length]);
