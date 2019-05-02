// Modal Sobre a Autora

const modal = document.getElementById('autora_modal');
const modalBtn = document.getElementById('secao-autora__btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


// Biblioteca - Carousel

var images = ['a.jpg', 'b.jpg', 'c.jpg'];
var x = 0;
var imgs = document.getElementById('img');
setInterval(slider, 2500);
function slider() {
  if (x < images.length) {
    x = x + 1;
  } else {
    x = 1;
  }
  imgs.innerHTML = "<img src=imgs/" + images[x - 1] + ">";
}

// Citação "revelada"

var quote = document.getElementById("quote");
window.addEventListener("scroll", quoteJaneScrool);
function quoteJaneScrool() {
    switch(window.screen.availWidth){
        case 1600:
          quote.classList.add("quote-show")
          quote.classList.remove("quote-hidden")
        break;
    }
    if(pageYOffset >= 1600){
        quote.classList.add("quote-show")
        quote.classList.remove("quote-hidden")
     }
     else{
       quote.classList.remove("quote-show")
        quote.classList.add("quote-hidden")
     }
    };

// Menu Responsivo

(function(){

    var menuResponsivo = document.getElementById("menuResponsivo");
    var btnResponsivo = document.getElementById("btnResponsivo");
    
    btnResponsivo.addEventListener('click', function(e){
        e.preventDefault();
        document.body.scrollTop += 0;
        if (menuResponsivo.className === "navegacao__itens") {
            menuResponsivo.className += " ativo";
        } else {
            menuResponsivo.className = "navegacao__itens";
        }
    });

})();

window.addEventListener("scroll", function(){
   
    if(pageYOffset >= 250) {
       document.querySelector('.navegacao').style.backgroundColor = '#BF7311';
       document.querySelector('.navegacao__itens').style.backgroundColor = '#BF7311';
    } else {
       document.querySelector('.navegacao').style.backgroundColor = 'transparent';
       document.querySelector('.navegacao__itens').style.backgroundColor = 'transparent';
    }

})
