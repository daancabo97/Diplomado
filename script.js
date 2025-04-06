/* Filtrar por imagen */ 

const botonesFiltro = document.querySelectorAll(".filtro");
const itemsGaleria = document.querySelectorAll(".galeria-item");

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    const categoria = boton.getAttribute("data-categoria");

    itemsGaleria.forEach((item) => {
      if (categoria === "todas" || item.classList.contains(categoria)) {
        item.style.display = "block";
        } else {
          item.style.display = "none";
        }
    });
  });
});


/* Mostrar detalle de la imagen */ 

const params = new URLSearchParams(window.location.search);
const imagen = params.get("img");
const autor = params.get("autor");
const categoria = params.get("categoria");

if(document.getElementById("imagen-detalle")) {
  document.getElementById("imagen-detalle").src = "assets/" + imagen;
  document.getElementById("titulo-imagen").textContent = autor;
  document.getElementById("autor-imagen").textContent = "Integrante de Iron Maiden";


const biografias = {
  dickinson: "Bruce Dickinson es el icónico vocalista de Iron Maiden, conocido por su poderosa voz y energía en el escenario.",
  harris: "Steve Harris es el fundador, bajista y compositor principal de Iron Maiden. Su estilo ha definido el sonido de la banda.",
  gers: "Janick Gers es uno de los tres guitarristas de Iron Maiden, conocido por su presencia escénica única y técnica agresiva.",
  mcbrain: "Nicko McBrain es el baterista de la banda desde 1982, destacándose por su precisión y fuerza en vivo.",
  murray: "Dave Murray ha sido guitarrista desde los inicios de la banda. Sus solos melódicos son parte esencial del estilo de Maiden.",
  smith: "Adrian Smith combina riffs pesados con solos melódicos. Es una figura clave en la evolución musical del grupo."
};

document.getElementById("biografia-imagen").textContent = biografias[categoria] || "Biografía no disponible para este integrante.";

}


