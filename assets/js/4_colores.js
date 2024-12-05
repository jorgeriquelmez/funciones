//cajas de  colores que cambian a negro
const cambiaColor = (elemento, colorea) => {
    elemento.style.backgroundColor = colorea;
  }
  
  const box1 = document.getElementById("caja1");
  const box2 = document.getElementById("caja2");
  const box3 = document.getElementById("caja3");
  const box4 = document.getElementById("caja4");

  box1.addEventListener("click", () => cambiaColor(box1, "black"));
  box2.addEventListener("click", () => cambiaColor(box2, "black"));
  box3.addEventListener("click", () => cambiaColor(box3, "black"));
  box4.addEventListener("click", () => cambiaColor(box4, "black"));

//caja blanca y creacion de nuevas cajas al apretar letras
  const key = document.getElementById("key");
const color = {
  a: "pink",
  s: "orange",
  d: "skyblue",
  q: "purple",
  w: "grey",
  e: "brown",
};
document.addEventListener("keydown", function (event) {
  const tecla = event.key;
  if (tecla in color) {
    if (tecla === "q" || tecla === "w" || tecla === "e") {
      const nuevaCaja = document.createElement("div");
      nuevaCaja.style.width = nuevaCaja.style.height = "200px";
      nuevaCaja.style.marginBottom = "5px";
      nuevaCaja.style.marginLeft = "57px";
      nuevaCaja.style.backgroundColor = color[tecla];
      document.body.appendChild(nuevaCaja);
    } else if (tecla === "a" || tecla === "s" || tecla === "d") {
      key.style.backgroundColor = color[tecla];
    }
  }
});
