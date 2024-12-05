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
      nuevaCaja.style.backgroundColor = color[tecla];
      document.body.appendChild(nuevaCaja);
    } else if (tecla === "a" || tecla === "s" || tecla === "d") {
      key.style.backgroundColor = color[tecla];
    }
  }
});

