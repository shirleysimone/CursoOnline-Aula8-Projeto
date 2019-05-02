document.addEventListener("load", addEventos());

var diva = document.querySelector(".perfil__img-1");
var autora = document.querySelector("#autora");

function addEventos(){
   document.querySelector(".perfil__button").addEventListener("click", function(){
       
       diva.src="assets/foto_atual1.jpg";
       
   });
    
   document.querySelector(".perfil__button").addEventListener("dblclick", function(){
       
       diva.src="assets/foto_atual.jpg";
       
   }); 
    
    
   document.querySelector("#thilla").addEventListener("click", function(){
       
       autora.classList.remove("efeito_img");
       
   });

   document.querySelector("#thilla").addEventListener("mouseout", function(){
       
       autora.classList.add("efeito_img");
       
   });
    
};

