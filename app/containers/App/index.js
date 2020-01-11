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
import RegionPage from '../RegionPage';
import Tapachula from '../Tapachula';
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';
import GlobalStyle from '../../global-styles';
import ShareableResourcePage from '../ShareableResourcePage';
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/:id" component={RegionPage} />
        <Route path="/:-?[0-9]+" component={ShareableResourcePage} />
        <Route path="/Tapachula" component={Tapachula} />
        <Route path="/Tijuana" component={Tijuana} />

        <Route
          path="/elnumerodelalista"
          component={() => {
            window.location.href = 'http://www.elnumerodelalista.com';
            return null;
          }}
        />
        <Route
          path="/ShareableResource/:markerKey"
          component={ShareableResourcePage}
        />
        <Route path="/ShareableResource/" component={ShareableResourcePage} />
        <Route path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
