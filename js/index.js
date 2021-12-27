import scrollTopButton from "./boton_scroll.js";
import { ContactForm } from "./contact_form.js";
import darkTheme from "./dark_theme.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  scrollTopButton(".scroll-top-btn");
  // sendComment("comments");
  ContactForm();
});
darkTheme(".dark-theme-btn", "dark-mode");
