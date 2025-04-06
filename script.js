const botonesFiltro = document.querySelectorAll(".filtro");
const itemsGaleria = document.querySelectorAll(".galeria-item");

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    const categoria = boton.getAttribute("data-categoria");

    itemsGaleria.forEach((item) => {
      if (categoria === "todas") {
        item.style.display = "block";
      } else {
        if (item.classList.contains(categoria)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});
