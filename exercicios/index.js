// exemplo de codigo de loop de incrementacao
// for = para quanto eu sei exatamento o inicio o meio e fim do loop

function loop() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

// while = Usado quando não sabemos exatamente quantas vezes vamos repetir.
//Continua rodando enquanto a condição for verdadeira.

let lista = 0;

function loopLista() {
  while (lista <= 30) {
    console.log(lista);
    lista++;
  }
}

// navegacao por tabs

// selecionar os elementos a ser alterado
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  // funcao para adicionar a classe ativo para cada section
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    // funcao para ativar a funcao activetab ao click

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();


// accordion list
