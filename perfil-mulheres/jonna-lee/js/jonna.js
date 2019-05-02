

let botao1 = document.querySelector('.more1');
let textoBounty = document.querySelector('.textobounty');

botao1.addEventListener('click',function(){
    if (textoBounty.style.display === "none") {
      textoBounty.style.display = "block";
    } else {
      textoBounty.style.display = "none";
}
})

let botao2 = document.querySelector('.more2');

let textoKin = document.querySelector('.textokin');

botao2.addEventListener('click',function(){
    if (textoKin.style.display === "none") {
      textoKin.style.display = "block";
    } else {
      textoKin.style.display = "none";
}
})

let botao3 = document.querySelector('.more3');

let textoBlue = document.querySelector('.textoblue');

botao3.addEventListener('click',function(){
    if (textoBlue.style.display === "none") {
      textoBlue.style.display = "block";
    } else {
      textoBlue.style.display = "none";
}
})

let botao4 = document.querySelector('.more4');

let textoEatbf = document.querySelector('.textoeatbf');

botao4.addEventListener('click',function(){
    if (textoEatbf.style.display === "none") {
      textoEatbf.style.display = "block";
    } else {
      textoEatbf.style.display = "none";
}
})

let botao5 = document.querySelector('.more5');

let textoRtf = document.querySelector('.textortf');

botao5.addEventListener('click',function(){
    if (textoRtf.style.display === "none") {
      textoRtf.style.display = "block";
    } else {
      textoRtf.style.display = "none";
}
})


function rollover(cubobranco)
    {

        cubobranco.src = "cubob.png";

    }

    function mouseaway(cubobranco)
    {

        cubobranco.src = "cube.png";

    }