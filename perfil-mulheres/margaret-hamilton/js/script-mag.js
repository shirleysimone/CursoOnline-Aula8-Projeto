//Nome
var i = 0;
var txt = 'Margaret Heafield Hamilton';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("autora-js").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

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

// //Slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}


//Seta
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



