import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div
      style={{
        fontWeight: '700',
        textAlign: 'center',
        width: '75vw',
        padding: '20px',
        margin: '20px auto',
      }}
    >
      <h1> La Ruta del Migrante </h1>
      <ul style={{ fontSize: '175%' }}>
        <li>
          <Link to="/Tijuana">Mapa de Recursos en Tijuana, Mexico</Link>
        </li>
        <li>
          <Link to="/Tapachula">Mapa de Recursos en Tapachula, Mexico</Link>
        </li>
        <li>
          <Link to="/elnumerodelalista">El Numero de la Lista (Tijuana)</Link>
        </li>
      </ul>
    </div>
  );
}
