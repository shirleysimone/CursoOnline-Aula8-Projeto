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

try {
    const buttonAutora = document.querySelector('.arrow')
    buttonAutora.addEventListener('click', function(e){
        e.preventDefault()
        buttonAutora.classList.toggle('arrow-close')
        const autoraInfos = document.querySelector('.secao-autora__about')
        autoraInfos.classList.toggle('opened');
    })
} catch {
    if(!buttonAutora) {
        console.log('estamos na pagina home')
    } 
};