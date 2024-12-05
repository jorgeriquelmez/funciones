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
