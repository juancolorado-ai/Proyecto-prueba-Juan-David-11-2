import React from "react";
import "./App.css";

// Lista de opciones del menú: "id" identifica la página que se mostrará
const opciones = [
  { id: "inicio", texto: "Inicio" },
  { id: "catalogo", texto: "Catálogo" },
  { id: "ofertas", texto: "Ofertas" },
  { id: "contacto", texto: "Contacto" },
];

// Recibe por props la página actual, la función para cambiarla y el número de productos del carrito
function Menu({ paginaActual, cambiarPagina, cantidadCarrito }) {
  return (
    <nav className="menu-navegacion">
      <h2 className="logo" onClick={() => cambiarPagina("inicio")}>
        PIXEL VAULT
      </h2>
      <ul>
        {opciones.map((opcion) => (
          <li key={opcion.id}>
            <button
              className={
                paginaActual === opcion.id ? "menu-boton activo" : "menu-boton"
              }
              onClick={() => cambiarPagina(opcion.id)}
            >
              {opcion.texto}
            </button>
          </li>
        ))}
        <li className="carrito">🛒 {cantidadCarrito}</li>
      </ul>
    </nav>
  );
}

export default Menu;