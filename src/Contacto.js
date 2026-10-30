import React, { useState } from "react";
import "./App.css";

function Contacto() {
  // Estado con los datos que escribe el usuario en el formulario
  const [datos, setDatos] = useState({ nombre: "", correo: "", mensaje: "" });
  // Estado que indica si el formulario ya fue enviado
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(evento) {
    setDatos({ ...datos, [evento.target.name]: evento.target.value });
  }

  function manejarEnvio(evento) {
    evento.preventDefault(); // Evita que la página se recargue
    setEnviado(true);
  }

  function enviarOtro() {
    setDatos({ nombre: "", correo: "", mensaje: "" });
    setEnviado(false);
  }

  return (
    <section className="seccion-pagina">
      <h1>Contacto</h1>
      <p>¿Tienes dudas sobre un pedido o un juego? Escríbenos.</p>

      {enviado ? (
        <div className="confirmacion">
          <p className="mensaje-sorpresa">
            ¡Gracias, {datos.nombre}! Te responderemos a {datos.correo} muy
            pronto.
          </p>
          <button className="boton-accion" onClick={enviarOtro}>
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form className="formulario" onSubmit={manejarEnvio}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={datos.nombre}
            onChange={manejarCambio}
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Tu correo"
            value={datos.correo}
            onChange={manejarCambio}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje"
            rows="5"
            value={datos.mensaje}
            onChange={manejarCambio}
            required
          />
          <button type="submit" className="boton-accion">
            Enviar mensaje
          </button>
        </form>
      )}
    </section>
  );
}

export default Contacto;