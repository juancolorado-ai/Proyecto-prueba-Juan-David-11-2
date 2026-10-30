import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  // Estado que controla si se muestra el mensaje de descuento
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">
      <h1>Bienvenido a Pixel Vault</h1>
      <p>Tu tienda de videojuegos favorita: consolas, juegos y accesorios para todos los jugadores.</p>

      <img
        src="https://picsum.photos/seed/gamer/600/300"
        alt="Ambiente gamer con luces de neón"
        className="imagen-destacada"
      />

      <br />
      <button
        className="boton-accion"
        onClick={() => setMostrarMensaje(!mostrarMensaje)}
      >
        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}
      </button>

      {mostrarMensaje && (
        <p className="mensaje-sorpresa">
          ¡Felicidades! Tienes un 20% de descuento en tu primera compra.
        </p>
      )}
    </main>
  );
}

export default SeccionPrincipal;