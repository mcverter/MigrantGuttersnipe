import React from 'react';
import { FormattedMessage } from 'react-intl';
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div style={{
      fontWeight: "700",
      textAlign: "center",
      width: "75vw",
      padding: "20px",
      margin: "20px auto"
    }}>
    <h1> Guia Migrante </h1>
      <ul style={{fontSize: "175%"}}>
        <li><Link to="/TestTijuanaLegend">Test Tijuana Legend</Link></li>
        <li><Link to="/Tijuana">Tijuana</Link></li>
        <li><Link to="/Tapachula">Tapachula</Link></li>
        <li><Link to="/elnumerodelalista">El Numero de la Lista (Tijuana)</Link></li>
      </ul>
    </div>
  );
}
