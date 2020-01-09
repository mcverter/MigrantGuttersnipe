/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Tijuana from '../Tijuana';
import Tapachula from '../Tapachula';
import HomePage from '../HomePage';
import GlobalStyle from '../../global-styles';
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/Tijuana" component={Tijuana} />
        <Route path="/Tapachula" component={Tapachula} />
        <Route
          path="/elnumerodelalista"
          component={() => {
            window.location.href = 'http://www.elnumerodelalista.com';
            return null;
          }}
        />
        <Route path="/" component={HomePage} />
        <Route component={HomePage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
