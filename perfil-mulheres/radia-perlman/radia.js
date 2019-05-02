
var div = document.getElementById('div');
var texto = 'Radia Joy Perlman!';
var escrevendo = true;
function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (escrevendo) {
      if (!char.length) {
        return clearInterval(typer);
      }
      var next = char.pop();
      el.innerHTML += next;
      if (el.innerHTML.length == str.length) {
        escrevendo = false;
      }
    } 
  }, 500);
}
escrever(texto, div);