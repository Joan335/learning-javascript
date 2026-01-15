//Las apis web son todos los objetos e interfaces que nos permiten interactuar con el navegador
// const hablar = (texto) => {
//     const mensaje = new SpeechSynthesisUtterance(texto);
//     speechSynthesis.speak(mensaje);
// };

// document.getElementById("btnHablar").addEventListener("click", () => {
//     hablar("Hola, soy tu amigo y docente digital Jonathan Mircha");
// });

/*---------------Introduccion---------------*/

// console.log(document);
// console.log(document.head);
// console.log(document.documentElement); //Devuelve la etiqueta html
// console.log(document.links); //Se accede a una coleccion con los enlaces de la pagina
// console.log(document.images); //Se accede a una coleccion con las imagenes de la pagina
// console.log(document.scripts); //Se accede a una coleccion con los scripts de la pagina
// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);

/*---------------Nodos, elementos y selectores---------------*/
// console.log(document.getElementsByTagName("li")); //encontrar elementos por nombre de etiqueta
// console.log(document.getElementsByClassName("card")); //encontrar elementos por nombre de la clase
// console.log(document.getElementsByName("nombre")); //encontrar elementos por nombre
// console.log(document.getElementById("menu")); //encontrar elemento por Id
// console.log(document.querySelector("a")); //trae el primer selector del tipo que se ha especificado
// console.log(document.querySelectorAll("a")); //trae todos los selectores de un tipo
// console.log(document.querySelectorAll("a").length);
// console.log(document.querySelectorAll("a").forEach((el) => console.log(el)));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelectorAll("#menu li"));

/*--------------Atributos y Data-Attributes------------------*/
// console.log(document.documentElement.lang); //devuelve el idioma, con notacion del punto
// console.log(document.documentElement.getAttribute("lang")); //devuelve el idioma con getAttribute
// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.setAttribute("lang", "es-MX");
// console.log(document.documentElement.getAttribute("lang"));

// const $linkDOM = document.querySelector(".link-dom"); //Las variables que empiezan con $ sirven para identificar
// //variables que guardan un elemento del DOM

// $linkDOM.setAttribute("target", "_blank");
// $linkDOM.setAttribute("rel", "noopener");

// //Data-attributes
// console.log($linkDOM.getAttribute("data-description"));
// $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
// console.log($linkDOM.dataset.description);

/*--------------Estilos y Variables CSS---------------------*/
// const $linkDOM = document.querySelector(".link-dom");

// console.log($linkDOM.style); //Es mejor acceder a los estilos con la notición del punto, para ver el mapa completo
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);

// //Establecer valores
// $linkDOM.style.setProperty("text-decoration", "none");
// $linkDOM.style.setProperty("display", "block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.marginLeft = "auto";
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.padding = "1rem";
// $linkDOM.style.borderRadius = ".5rem";

// //Variables CSS - Custom Properties CSS
// const $html = document.documentElement,
//     $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//     varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor, varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.setProperty("color", varYellowColor);

// $html.style.setProperty("--dark-color", "#000");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color", varDarkColor);

/*---------------------------Clases CSS------------------*/
// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45")); //Evaluar si un elemento tiene un clase en particular
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45")); //Evaluar si un elemento tiene un clase en particular
// $card.classList.remove("rotate-45"); //Quita una clase
// console.log($card.classList.contains("rotate-45")); //Evaluar si un elemento tiene un clase en particular
// $card.classList.toggle("rotate-45"); //Si no tiene la clase la agrega y si la tiene la quita
// $card.classList.replace("rotate-45", "rotate-135");
// $card.classList.add("opacity-80", "sepia"); //Se puede agregar mas de una clase a la vez, remove funciona igual

/*----------------Texto y HTML--------------------*/
// const $whatIsDOM = document.getElementById("que-es");

// let text = `
//     <p>
//       El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
//     </p>
//     <p>
//       Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//     </p>
//     <p>
//       <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//     </p>
//   `;

// $whatIsDOM.innerText = text; //Sirve para agregar contenido textual al documento, no forma parte del estandar
// $whatIsDOM.textContent = text; //Sirve para agregar contenido textual al documento, pero no renderiza html
// $whatIsDOM.innerHTML = text; //Agrega contenido textual y renderiza html
// $whatIsDOM.outerHTML = text;

/*---------------------Traversing: Recorriendo el DOM--------------*/
// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstElementChild); //Primer elemento html
// console.log($cards.lastElementChild); //Ultimo elemento html
// console.log($cards.previousElementSibling); //Elemento hermano anterior
// console.log($cards.nextElementSibling); //Elemento hermano después
// console.log($cards.closest("body")); //Etiqueta más cercana
// console.log($cards.children[3].closest("section"));

/*-----------------Creando Elementos y Fragmentos----------------*/
// const $figure = document.createElement("figure"),
//     $img = document.createElement("img"),
//     $figcaption = document.createElement("figcaption"),
//     $figcaptionText = document.createTextNode("Animals"),
//     $cards = document.querySelector(".cards"),
//     $figure2 = document.createElement("figure");

// $img.setAttribute("src", "https://picsum.photos/id/1005/200/200");
// $img.setAttribute("alt", "Animals");
// $figure.classList.add("card");

// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);

// $figure2.innerHTML = `
// <img src="https://picsum.photos/id/1006/200/200" alt="People">
// <figcaption>People</figcaption>
// `;

// $figure2.classList.add("card");
// $cards.appendChild($figure2);

// const estaciones = ["Primavera", "Otoño", "Invierno", "Verano"],
//     $ul = document.createElement("ul");

// document.body.innerHTML += "<h3>Estaciones del año</h3>";
// document.body.appendChild($ul);

// estaciones.forEach(el => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $ul.appendChild($li);
// });

// const continentes = ["America", "Europa", "Asia", "Africa", "Oceania"],
//     $ul2 = document.createElement("ul");

// document.body.innerHTML += "<h3>Continentes</h3>";
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";
// continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`))

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre"
// ],
//     $ul3 = document.createElement("ul"),
//     $fragment = document.createDocumentFragment();

// meses.forEach(el => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $fragment.appendChild($li);
// });

// document.body.innerHTML += "<h3>Meses del año</h3>";
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3); //Los fragmentos es una manera mas optima que no pide tanta demanda de recursos

/*-------------------------Templates HTML-----------------*/
// const $cards = document.querySelector(".cards"),
//     $template = document.getElementById("template-card").content,
//     $fragment = document.createDocumentFragment(),
//     cardContent = [
//         {
//             title: "Tecnologia",
//             img: "https://picsum.photos/id/1022/200/200"
//         },
//         {
//             title: "Animales",
//             img: "https://picsum.photos/id/1008/200/200"
//         },
//         {
//             title: "Arquitectura",
//             img: "https://picsum.photos/id/1009/200/200"
//         },
//         {
//             title: "Gente",
//             img: "https://picsum.photos/id/1010/200/200"
//         },
//         {
//             title: "Naturaleza",
//             img: "https://picsum.photos/id/1011/200/200"
//         },
//     ];

// cardContent.forEach(el => {
//     $template.querySelector("img").setAttribute("src", el.img);
//     $template.querySelector("img").setAttribute("alt", el.title);
//     $template.querySelector("figcaption").textContent = el.title;

//     let $clone = document.importNode($template, true); //Con el true copia toda la estructura interna, con false no
//     $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);

/*-----------------------Modificando Elementos------------------*/
// const $cards = document.querySelector(".cards"),
//     $newCard = document.createElement("figure"),
//     $cloneCards = $cards.cloneNode(true); //Con true clona todo, incluyendo las etiquetas internas


// $newCard.innerHTML = `
//     <img src="https://picsum.photos/id/1014/200/200" alt="Any">
//     <figcaption>Any</figcaption>
// `;

// $newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.insertBefore($newCard, $cards.firstElementChild); //inserta el nuevo elemento antes del primer hijo
//$cards.removeChild($cards.lastElementChild); //Elimina el ultimo elemento
// document.body.appendChild($cloneCards); //inserta el elemento clonado al final

/*------------------------Modificando Elementos (Estilo Moderno)-------------*/
/*
.insertAdjacent...
    .insertAdjacentElement(position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position, text)

Posiciones:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
*/
// const $cards = document.querySelector(".cards"),
//     $newCard = document.createElement("figure");

// let $contenCard = `
//     <img src="https://picsum.photos/id/1014/200/200" alt="Any">
//     <figcaption></figcaption>
// `;
// $newCard.classList.add("card");

// $newCard.insertAdjacentHTML("beforeend", $contenCard);
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// $cards.insertAdjacentElement("afterbegin", $newCard);

// $cards.prepend($newCard); //Agrega como primer hijo
// $cards.before($newCard); //Agrega como hermano anterior
// $cards.append($newCard); //Agrega como ultimo hijo
// $cards.after($newCard); //Agrega como hermano posterior

/*--------------------------Manejadores de Eventos------------------*/
// function holaMundo(e) {
//     alert("Hola Mundo");
//     console.log(e);
// }

// const $eventoSemantico = document.getElementById("evento-semantico"),
//     $eventoMultiple = document.getElementById("evento-multiple");

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e) {
//     alert("Hola Mundo manejador de eventos semanticos");
//     console.log(e);
// };

// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e) => {
//     alert("Hola Mundo Manejador de eventos multiples");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// });

/*-------------------------Eventos con Parametros y Remover Eventos----------------*/
// function saludar(e, nombre = "Desconocid@") { //Toda funcion que vaya a ser manejadora de evento, no puede recibir
//     alert(`Hola ${nombre}`);               //otro parametro diferente al evento e
//     console.log(e)
// }

// const $eventoSemantico = document.getElementById("evento-semantico"),
//     $eventoMultiple = document.getElementById("evento-multiple"),
//     $eventoRemover = document.getElementById("evento-remover");

// $eventoMultiple.addEventListener("click", (e) => {
//     saludar(e);
//     saludar(e, "Joan");
// });

// const removerDobleClick = (e) => {
//     alert(`Removiendo el evento de tipo ${e.type}`);
//     console.log(e);
//     $eventoRemover.removeEventListener("dblclick", removerDobleClick);
//     $eventoRemover.disabled = true;
// };

// $eventoRemover.addEventListener("dblclick", removerDobleClick);

/*-----------------------------Flujo de Eventos (Burbuja y Captura)-------------------*/
// const $divsEventos = document.querySelectorAll(".eventos-flujo div");

// function flujoEventos(e) {
//     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
// }

// $divsEventos.forEach(div => {
//     //Fase de Burbuja
//     // div.addEventListener("click", flujoEventos);
//     // div.addEventListener("click", flujoEventos, false);
//     //Fase de captura
//     //div.addEventListener("click", flujoEventos, true);
//     div.addEventListener("click", flujoEventos, {
//         capture: false,
//         once: true
//     });
// })

/*----------------------stopPropagation y preventDefault---------------------*/
// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//     $linkEventos = document.querySelector(".eventos-flujo a");

// function flujoEventos(e) {
//     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
//     e.stopPropagation();
// }

// $divsEventos.forEach(div => {
//     // Fase de Burbuja
//     div.addEventListener("click", flujoEventos);
//     div.addEventListener("click", flujoEventos, false);
//     // Fase de captura
//     div.addEventListener("click", flujoEventos, true);
//     div.addEventListener("click", flujoEventos, {
//         capture: false,
//         once: true
//     });
// });

// $linkEventos.addEventListener("click", (e) => {
//     alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
//     e.preventDefault(); //cancela el comportamiento por default de abrir el enlace
//     e.stopPropagation();
// });


/*---------------------------Delegación de Eventos----------------------*/
// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//     $linkEventos = document.querySelector(".eventos-flujo a");

// function flujoEventos(e) {
//     console.log(`Hola te saluda ${e.target.className}, el click lo origino ${e.target.className}`);
// }

// document.addEventListener("click", (e) => {
//     console.log("Click en", e.target);

//     if (e.target.matches(".eventos-flujo div")) {
//         flujoEventos(e);
//     }

//     if (e.target.matches(".eventos-flujo a")) {
//         alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
//         e.preventDefault(); //cancela el comportamiento por default de abrir el enlace
//     }
// });


/*----------------------------BOM: Propiedades y Eventos-----------------------*/
// window.addEventListener("resize", (e) => {
//     console.clear();
//     console.log("*****************Evento Resize***************");
//     console.log(window.innerWidth); //viewport
//     console.log(window.innerHeight);
//     console.log(window.outerWidth); //tamaño de la ventana
//     console.log(window.outerHeight);
//     console.log(e);
// });

// window.addEventListener("scroll", (e) => {
//     console.clear();
//     console.log("*****************Evento Scroll***************");
//     console.log(window.scrollX);
//     console.log(window.scrollY);
//     console.log(e);
// });

// window.addEventListener("load", (e) => {
//     console.log("*****************Evento Load***************");
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e);
// });

// window.addEventListener("DOMContentLoaded", (e) => { //Es mucho más eficiente trabajar con este evento
//     console.log("*****************Evento DOMContentLoaded***************");
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e);
// });

/*-------------------------------------BOM: Métodos---------------------------*/
// window.alert("Alerta");
// window.confirm("Confirmación");
// window.prompt("Aviso"); //Tiene boton de aceptar y cancelar, valida true o false
// const $btnAbrir = document.getElementById("abrir-ventana"),
//     $btnCerrar = document.getElementById("cerrar-ventana"),
//     $btnImprimir = document.getElementById("imprimir-ventana");

// let ventana;

// $btnAbrir.addEventListener("click", e => {
//     ventana = window.open("https://jonmircha.com");
// });
// $btnCerrar.addEventListener("click", e => {
     // window.close();
//     ventana.close();
// });
// $btnImprimir.addEventListener("click", e => {
//     window.print();
// });

/*-------------------------BOM: Objetos: URL, Historial y Navegador---------------------*/
// console.log("********************Objeto URL (location)************************");
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.search);
// console.log(location.pathname);
// location.reload();

// console.log("********************Objeto Historial************************");
// console.log(history);
// console.log(history.length);
// history.forward(1);
// history.go(-3);
// history.back(2);

// console.log("********************Objeto Navegador************************");
// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);




