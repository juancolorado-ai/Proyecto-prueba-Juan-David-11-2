import React, { useState } from "react";
import "./App.css";

const juegos = [
  { id: 1, nombre: "Galaxy Raiders", plataforma: "PlayStation", precio: 189900, icono: "🚀" },
  { id: 2, nombre: "Pixel Kingdom", plataforma: "Nintendo", precio: 159900, icono: "🏰" },
  { id: 3, nombre: "Neon Racer", plataforma: "PC", precio: 89900, icono: "🏎️" },
  { id: 4, nombre: "Dungeon Forge", plataforma: "Xbox", precio: 179900, icono: "⚔️" },
  { id: 5, nombre: "Cyber Arena", plataforma: "PC", precio: 69900, icono: "🤖" },
  { id: 6, nombre: "Sky Legends", plataforma: "PlayStation", precio: 199900, icono: "🐉" },
  { id: 7, nombre: "Mini Quest", plataforma: "Nintendo", precio: 99900, icono: "🧩" },
  { id: 8, nombre: "Turbo Drift", plataforma: "Xbox", precio: 149900, icono: "🏁" },
];

const plataformas = ["Todos", "PC", "PlayStation", "Xbox", "Nintendo"];

function Catalogo({ agregarAlCarrito }) {
  // Estado que guarda qué plataforma está seleccionada en el filtro
  const [filtro, setFiltro] = useState("Todos");

  const juegosFiltrados =
    filtro === "Todos"
      ? juegos
      : juegos.filter((juego) => juego.plataforma === filtro);

  return (
    <section className="seccion-pagina">
      <h1>Catálogo</h1>
      <p>Elige tu plataforma y encuentra tu próximo juego.</p>

      <div className="filtros">
        {plataformas.map((plataforma) => (
          <button
            key={plataforma}
            className={
              filtro === plataforma ? "filtro-boton activo" : "filtro-boton"
            }
            onClick={() => setFiltro(plataforma)}
          >
            {plataforma}
          </button>
        ))}
      </div>

      <div className="tarjetas">
        {juegosFiltrados.map((juego) => (
          <div className="tarjeta" key={juego.id}>
            <div className="tarjeta-icono">{juego.icono}</div>
            <h3>{juego.nombre}</h3>
            <p className="tarjeta-plataforma">{juego.plataforma}</p>
            <p className="tarjeta-precio">
              ${juego.precio.toLocaleString("es-CO")}
            </p>
            <button className="boton-accion" onClick={agregarAlCarrito}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;