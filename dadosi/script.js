function jogardado(jogada) {
    var jogada = Math.floor(Math.random() * 100 + 1);
    document.getElementById('resultado').innerHTML = jogada;
  }

function lightmode() {
    var element = document.getElementById("buttontheme");
    element.style.backgroundColor= "#FFFFFF";
}
function darkmode() {
  var element = document.getElementById("buttontheme");
  element.style.backgroundColor= "#000000";
}