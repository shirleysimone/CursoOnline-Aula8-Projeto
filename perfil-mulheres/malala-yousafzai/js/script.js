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
       document.querySelector('.navegacao').style.backgroundColor = '#674582';
       document.querySelector('.navegacao__itens').style.backgroundColor = '#674582';
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
}


// Carousel

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}