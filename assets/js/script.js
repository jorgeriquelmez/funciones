//Ejercicio Pintar
function pintar(elemento, color = "green"){
  ele1.style.backgroundColor = color;
}

const elemento = document.getElementById("ele1");
elemento.addEventListener("click",() => pintar(elemento,  color = "yellow"))


