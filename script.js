  /* Filtrar por imagen */ 

document.addEventListener("DOMContentLoaded", function () {

        const botonesFiltro = document.querySelectorAll(".filtro");
        const itemsGaleria = document.querySelectorAll(".galeria-item");

        if (botonesFiltro.length && itemsGaleria.length) {
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
        }

 /* Mostrar detalle de la imagen */


          const params = new URLSearchParams(window.location.search);
          const imagen = params.get("img");
          const autor = params.get("autor");
          const categoria = params.get("categoria");


          if (document.getElementById("imagen-detalle")) {
            document.getElementById("imagen-detalle").src = "assets/" + imagen;
            document.getElementById("titulo-imagen").textContent = autor;
            document.getElementById("autor-imagen").textContent = "Integrante de Iron Maiden";



    // 👇 AÑADIMOS ESTO SIN TOCAR TU LÓGICA
    const souvenirs = {
      Monopolio: {
        descripcion: "Juego de mesa edición Iron Maiden.",
        video: "https://www.youtube.com/embed/1g3_CFmnU7k"
      },
      Cervezas: {
        descripcion: "Cervezas Trooper edición especial.",
        video: "https://www.youtube.com/embed/rnZdiR0A5NM"
      },
      Camisetas: {
        descripcion: "Camisetas oficiales de la banda.",
        video: "https://www.youtube.com/embed/FG1NrQYXjLU"
      },
      Candelabros: {
        descripcion: "Candelabros temáticos Iron Maiden.",
        video: "https://www.youtube.com/embed/4J7QaoG-KeI"
      },
      "Figuras de colección": {
        descripcion: "Figuras de Eddie The Trooper.",
        video: "https://www.youtube.com/embed/PhFckxgbSE8"
      },
      Camiones: {
        descripcion: "Camión de gira a escala.",
        video: "https://www.youtube.com/embed/n2WpdGAs5Nw"
      },
      Balones: {
        descripcion: "Balón Maiden edición limitada.",
        video: "https://www.youtube.com/embed/qB2UgKmfh2A"
      },
      Buzos: {
        descripcion: "Buzo Senjutsu original.",
        video: "https://www.youtube.com/embed/NkULdUtp8bU"
      }
    };

    if (souvenirs[categoria]) {
      // Oculta sección de integrantes si existe
      const bloqueIntegrante = document.getElementById("detalle-integrante");
      if (bloqueIntegrante) bloqueIntegrante.style.display = "none";

      // Muestra sección de souvenirs
      const bloqueSouvenir = document.getElementById("detalle-souvenir");
      if (bloqueSouvenir) bloqueSouvenir.style.display = "block";

      document.getElementById("titulo-souvenir").textContent = autor;
      document.getElementById("texto-souvenir").textContent = souvenirs[categoria].descripcion;
      document.getElementById("video-detalle").innerHTML = `
        <div class="ratio ratio-16x9">
          <iframe src="${souvenirs[categoria].video}" title="Video ${autor}" allowfullscreen></iframe>
        </div>
      `;
      return; // No ejecuta lo de integrantes
    }


          const integrantes = {

                dickinson:{ 
                  biografia:"Paul Bruce Dickinson (Worksop, Nottinghamshire, 7 de agosto de 1958), más conocido como Bruce Dickinson, es un cantante, compositor, músico, productor musical, esgrimista, empresario, escritor, historiador, locutor, presentador, guionista, catedrático universitario y piloto de aviación británico. Es famoso por ser el vocalista, frontman y cocompositor de la banda de heavy metal Iron Maiden. Es considerado por muchos expertos de canto, medios y el público en general como uno de los mejores cantantes de la historia de este género. También posee un nivel intermedio de interpretación en guitarra y el piano, mostrado principalmente en su carrera en solitario así como en la canción de Iron Maiden, Empire of the Clouds.",
                  estatura: "1.68 m",
                  hobbies: "Pilotear aviones, practicar esgrima, escribir libros, enseñar historia, trabajar en la radio",
                  datoCurioso: "Es el piloto del avion de la banda, tiene su propia empresa de mantenimiento de aviones y superó un cáncer de lengua diagnosticado en 2014, el cual fue causal a la práctica de sexo oral, según declaraciones médicas."
                },
                harris:{ 
                  biografia: "Stephen Percy Harris, (Waltham Forest, Gran Londres, Inglaterra, 12 de marzo de 1956) conocido artísticamente como Steve Harris, es un exfutbolista y músico británico, siendo mayormente conocido por ser el fundador, bajista, teclista, compositor principal y líder del grupo británico de heavy metal Iron Maiden. Además de su labor como bajista en la banda, es escritor, y ha llevado a cabo muchas otras funciones para el grupo, como la producción y la coproducción de sus álbumes, dirigir y editar sus videos en vivo, y la realización de los teclados de estudio y sintetizadores. Es considerado por medios de prensa, otros bajistas, y el público en general como uno de los mejores bajistas de metal de todos los tiempos, tanto por su estilo a la hora de tocar, su calidad como compositor, y su actitud aguerrida sobre el escenario.",
                  estatura: "1.74 m",
                  hobbies: "Juega Fútbol, le gusta hacer producción musical y hacer practicar escénico",
                  datoCurioso: "Fue jugador del West Ham United cuando era joven"
                },
                gers:{ 
                  biografia:"Janick Robert Gers (Hartlepool, Inglaterra; 27 de enero de 1957) es un sociólogo,[1]​ guitarrista y compositor británico, reconocido por formar parte del tridente de guitarras del grupo de heavy metal Iron Maiden, integrando la formación desde 1990 hasta la actualidad. En 1975 fue cofundador de la banda de la NWOBHM llamada White Spirit. Posteriormente fue guitarrista de la agrupación Gillan del vocalista de Deep Purple Ian Gillan y de la banda solista de Bruce Dickinson. Además de músico y compositor, posee el título de licenciado en Sociología, y es conocido por su gran despliegue escénico[1]​ Cabe destacar que Gers es zurdo pero toca la guitarra como diestro.",
                  estatura: "1.83 m",
                  hobbies: "Le gusta la Sociología, hace caminatas y saltar en el escenario",
                  datoCurioso: "Toca la guitarra como diestro aunque es zurdo"
                },
                mcbrain:{ 
                  biografia: "Michael Henry McBrain (Hackney, Gran Londres, Inglaterra, 5 de junio de 1952) es el baterista del grupo británico de heavy metal Iron Maiden retirado de las giras desde 2024. El nombre de Nicko lo adoptó como sobrenombre tal y como se llamaba su osito de peluche preferido. McBrain es acreditado como uno de los pioneros del sonido de heavy metal. En 2009 la revista Rolling Stone publicó la lista de los 100 mejores baterías de todos los tiempos, en ella Nicko fue incluido en el puesto número 38.",
                  estatura: "1.78 m",
                  hobbies: "Cocina, le gustan los carros clásicos y va a la iglesia",
                  datoCurioso: "Llamado 'Nicko' por su osito de peluche de niño"
                },
                murray:{ 
                  biografia: "David Michael Murray (Edmonton, Londres, 23 de diciembre de 1956) es un músico y compositor conocido por formar parte de la banda británica de heavy metal Iron Maiden, siendo él y Steve Harris los únicos miembros de la agrupación que han aparecido en toda la discografía de la misma. Como ya se mencionó antes, Dave es considerado el segundo miembro original de Iron Maiden, ya que junto al fundador, principal compositor y por lo tanto líder de la banda, Steve Harris, es el único que ha aparecido en todos los discos de Iron Maiden, y también es el único desde su debut en 1980. Sin embargo, Murray entró en 1976, siendo ese mismo año expulsado de la banda por el entonces vocalista Dennis Wilcock, volviendo definitivamente meses después.",
                  estatura: "1.73 m",
                  hobbies: "Colecciona Guitarras vintage y le gusta la meditación",
                  datoCurioso: "Fue expulsado brevemente de la banda en 1976"
                },
                smith:{ 
                  biografia:"Adrian Frederick Smith (Hackney, Londres, 27 de febrero de 1957) es un guitarrista y cantante británico, principalmente conocido por su trabajo con la banda de heavy metal Iron Maiden. También ha tenido una destacada participación como compositor, tanto en sus trabajos como solista, así como en Iron Maiden junto al bajista Steve Harris. Smith creció en Camden, Londres y se interesó en la música rock a los quince años. Pronto formó una amistad con el futuro guitarrista de Iron Maiden, Dave Murray, quien lo inspiró a tocar la guitarra. Después de dejar la escuela a los 16 años, formó una banda llamada Urchin, que encabezó hasta su disolución en 1980. Se unió a Iron Maiden en noviembre de ese mismo año, sustituyendo a Dennis Stratton.",
                  estatura: "1.78 m",
                  hobbies: "Le gusta la pesca, el ciclismo y componer canciones",
                  datoCurioso: "Fundó la banda Urchin antes de entrar a Iron Maiden"
                },
          };



          const datos = integrantes[categoria];

          if (datos) {
            document.getElementById("biografia-imagen").textContent = datos.biografia;

            document.getElementById("info-extra").innerHTML = `
              <li><strong>Estatura:</strong> ${datos.estatura}</li>
              <li><strong>Hobbies:</strong> ${datos.hobbies}</li>
              <li><strong>Dato curioso:</strong> ${datos.datoCurioso}</li>
            `;
          } else {
            document.getElementById("biografia-imagen").textContent = "Biografía no disponible para este integrante.";
          }
        }

        emailjs.init("GoJXwoaefx-xLwI1V");

/* Envío de formulario de contacto */
        document.getElementById("form-contacto").addEventListener("submit", function(e) {
          e.preventDefault();

          var templateParams = {
            name: document.getElementById("nombre").value,
            email: document.getElementById("email").value,
            message: document.getElementById("mensaje").value
        };
       
          emailjs.send("service_exosqmk", "template_ig6ufr5", templateParams )
            .then(function(response) {
              console.log("Éxito:", response.status, response.text);
              console.log(response);
              alert("Correo enviado con éxito");
              document.getElementById("form-contacto").reset();
          }, function(error) {
            console.error("Error al enviar:", error); 
            alert("Error al enviar el correo.");
          });
        });
});


