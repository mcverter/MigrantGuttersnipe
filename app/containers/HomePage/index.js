/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div style={{
      fontSize: "250%",
      fontWeight: "700",
      textAlign: "center",
      width: "50%",
      margin: "20px auto"
    }}>
    <h1> Guia Migrante </h1>
      <ul>
        <li><Link to="/Tijuana">Tijuana</Link></li>
        <li><Link to="/Tapachula">Tapachula</Link></li>
        <li><Link to="/elnumerodelalista">El Numero de la Lista (Tijuana)</Link></li>
      </ul>
    </div>
  );
}
