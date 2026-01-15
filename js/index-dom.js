import scrollTopButton from "./dom/boton_scroll.js";
import slider from "./dom/carrusel.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import searchFilters from "./dom/filtro_busquedas.js";
import getGeolocation from "./dom/geolocalizacion.js";
import hamburgerMenu from "./dom/menu-hamburguesa.js";
import speechReader from "./dom/narrador.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import scrollSpy from "./dom/scroll_espia.js";
import draw from "./dom/sorteo.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import smartVideo from "./dom/video_inteligente.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#iniciar-reloj", "#parar-reloj");
    alarm("assets/alarm.wav", "#iniciar-alarma", "#parar-alarma");
    countdown("countdown", "Jun 09, 2026 03:23:19", "Feliz cumpleaños amigo y docente digital 🤓");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/embed/on4IoQ2MQ7M?si=Hk1cEzBUk71JwfZV" class="video-link"
            target="_blank">
            Ver video
        </a>`,
        `<iframe class="video-frame" width="560" height="315"
            src="https://www.youtube.com/embed/on4IoQ2MQ7M?si=Hk1cEzBUk71JwfZV" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>`);
    responsiveMedia("gmaps",
        "(min-width: 1024px)",
        `<a href="https://maps.app.goo.gl/sZxbXo1WMV7J6xnb8"
            class="map-link" target="_blank">
            Ver mapa
        </a>`,
        `<iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914410253505!2d2.291906376794116!3d48.858373600707154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sco!4v1765328211318!5m2!1sen!2sco"
            class="map-frame" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
