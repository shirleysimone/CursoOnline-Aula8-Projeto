// seta que leva pro topo
const $button = document.getElementById('arrowTop');

$button.addEventListener('click', function() {

    window.scrollTo(pageYOffset, 0);
});

window.addEventListener('scroll', function() {
    console.log(pageYOffset);
    console.log($button.hidden);

    if (pageYOffset > 1500) {
        $button.hidden = false;
        return false;
    }
    $button.hidden = true;
});

//modal da janela das fundadoras

var modal = document.getElementById("reprogramaFounders");

// btn que abre modal
var btn = document.getElementById("myBtn");

//pega o elemento que fecha o modal (span)
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
