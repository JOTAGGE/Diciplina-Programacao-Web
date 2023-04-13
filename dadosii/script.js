function jogardado(jogada) {
    var jogada = Math.floor(Math.random() * 100 + 1);
    document.getElementById('resultado').innerHTML = jogada;
  }
  function jogardado1(jogada) {
    var jogada = Math.floor(Math.random() * 100 + 1);
    document.getElementById('resultado1').innerHTML = jogada;
  }

function reiniciar(restart){
  document.getElementById('resultado').innerHTML = " ";
  document.getElementById('resultado1').innerHTML = " ";
}

function lightmode() {
    var element = document.getElementById("buttontheme");
    element.style.backgroundColor= "white";
}

function darkmode() {
  var element = document.getElementById("buttontheme");
  element.style.backgroundColor= "black";
}