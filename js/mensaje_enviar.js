const d = document;

export default function sendComment(comentario) {
  const $comentario = d.getElementById(comentario);

  d.addEventListener("click", (e) => {
    if (e.target === $comentario) {
      alert("formulario enviado");
      d.getElementById("comentarios").value = "";
    }
  });
}
