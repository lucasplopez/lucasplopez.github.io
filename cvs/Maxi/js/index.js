import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./dark_theme.js";
import sendComment from "./mensaje_enviar.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  scrollTopButton(".scroll-top-btn");
  sendComment("comments");
});
darkTheme(".dark-theme-btn", "dark-mode");
