<!--

IRON MAIDEN - PROYECTO WEB

- > ESTRUCUTURA DEL PROYECTO: PROYECTO:

        -index.html -> Inicio: Destacados y categorías
        -galeria.html -> Galería: Vista general con miniaturas y filtros.
        -detalle.html -> Detalle de imagen: Vista ampliada con descripción y autor
        -nosotros.html -> Sobre nosotros: Información de los autores con formulario de contacto
        -script.js ->  Maneja la logica de filtro por imagenes, ver detalle de la imagen y correo
        -server.js -> Servidor para correo 

- >  FUNCIONALIDAD DEL FORMULARIO DE CONTACTO:

        Referencia funcionalidad: https://www.nodemailer.com/about/

        Dependencias nodemailer:{
                                        "dependencies": {
                                        "nodemailer": "^6.10.1"
                                        },
                                        "scripts": {
                                        "start": "node server.js"
                                        },
                                        "name": "primerproyecto",
                                        "description": "<!--",
                                        "version": "1.0.0",
                                        "main": "script.js",
                                        "devDependencies": {},
                                        "keywords": [],
                                        "author": "",
                                        "license": "ISC"
                                }         

              Instalar Node.js  version 14 o superior
              npm install
              node server.js
                        
 -->