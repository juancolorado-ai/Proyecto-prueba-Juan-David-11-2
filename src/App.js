import React, { useState } from "react";
import Menu from "./Menu";
import SeccionPrincipal from "./SeccionPrincipal";
import Catalogo from "./Catalogo";
import Ofertas from "./Ofertas";
import Contacto from "./Contacto";
import Footer from "./Footer";
import "./App.css";

function App() {
  // Estado que guarda qué página se está mostrando
  const [paginaActual, setPaginaActual] = useState("inicio");
  // Estado con la cantidad de productos en el carrito
  const [carrito, setCarrito] = useState(0);

  function agregarAlCarrito() {
    setCarrito(carrito + 1);
  }

  // Decide qué componente mostrar según la página seleccionada
  function mostrarPagina() {
    switch (paginaActual) {
      case "catalogo":
        return <Catalogo agregarAlCarrito={agregarAlCarrito} />;
      case "ofertas":
        return <Ofertas />;
      case "contacto":
        return <Contacto />;
      default:
        return <SeccionPrincipal />;
    }
  }

  return (
    <div className="contenedor-app">
      <Menu
        paginaActual={paginaActual}
        cambiarPagina={setPaginaActual}
        cantidadCarrito={carrito}
      />
      {/* key hace que la animación se repita al cambiar de página */}
      <div className="pagina" key={paginaActual}>
        {mostrarPagina()}
      </div>
      <Footer />
    </div>
  );
}

export default App;