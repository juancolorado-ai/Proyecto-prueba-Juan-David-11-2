import React, { useState } from "react";
import "./App.css";

const ofertas = [
  {
    id: 1,
    titulo: "Combo Retro",
    descripcion: "Lleva 2 juegos de Nintendo y ahorra un 30%.",
    codigo: "RETRO30",
  },
  {
    id: 2,
    titulo: "Primera compra",
    descripcion: "20% de descuento en tu primer pedido.",
    codigo: "BIENVENIDO20",
  },
  {
    id: 3,
    titulo: "Envío gratis",
    descripcion: "En compras superiores a $200.000.",
    codigo: "ENVIOGRATIS",
  },
];

// Componente de una oferta: cada una guarda su propio estado para mostrar u ocultar el código
function TarjetaOferta({ oferta }) {
  const [verCodigo, setVerCodigo] = useState(false);

  return (
    <div className="tarjeta">
      <div className="tarjeta-icono">🔥</div>
      <h3>{oferta.titulo}</h3>
      <p>{oferta.descripcion}</p>
      <button className="boton-accion" onClick={() => setVerCodigo(!verCodigo)}>
        {verCodigo ? "Ocultar código" : "Revelar código"}
      </button>
      {verCodigo && <p className="codigo-descuento">{oferta.codigo}</p>}
    </div>
  );
}

function Ofertas() {
  return (
    <section className="seccion-pagina">
      <h1>Ofertas</h1>
      <p>Descubre los códigos de descuento disponibles esta semana.</p>

      <div className="tarjetas">
        {ofertas.map((oferta) => (
          <TarjetaOferta key={oferta.id} oferta={oferta} />
        ))}
      </div>
    </section>
  );
}

export default Ofertas;