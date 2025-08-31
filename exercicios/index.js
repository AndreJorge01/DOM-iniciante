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
function initAccordionList() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordionList();

// scroll suave

const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');

function initScrollSuave() {
  function scrollToSection(event) {
    event.preventDeFault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma alternativa
    // const topo = section.offSetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInterno.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

// animacao ao scroll

function initAnimacaoScroll() {
  const sections = document.querySelectorAll("js-scroll");

  if (section.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
