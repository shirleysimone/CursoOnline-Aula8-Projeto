

var x = document.querySelectorAll(".modalButton");
x.forEach(function (item){
	var idModal = item.getAttribute("modal");
  item.addEventListener("click", function(){
    document.getElementById(idModal).style.display = "block";
  })
});


var modals = document.querySelectorAll(".modal");

var fecha = document.querySelectorAll(".close");
fecha.forEach(function (item) {
  item.addEventListener("click", function(){
    modals.forEach(function (mod) {
      mod.style.display = "none";
    });
 
  })

});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  // if (event.target == modal) {
  //   modal.style.display = "none";
  // }
}
  

