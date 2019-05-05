// Nav ASIDE

let mainNavLinks = document.querySelectorAll("aside nav ul li a");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop - 170 <= fromTop &&
      section.offsetTop + section.offsetHeight - 170 > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

// Ativar a explicação do BUG
const botao = document.querySelector(".secao-diva__btn");

botao.addEventListener("click", function() {
  let resposta = document.querySelector(".secao-diva__bug--resposta");
  resposta.classList.toggle("secao-diva__bug--desativada");
});
