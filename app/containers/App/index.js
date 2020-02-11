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
import HomePage from '../HomePage';
import RegionPage from '../RegionPage';
import ShareableDetailPage from '../ShareableDetailPage';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route
          path="/elnumerodelalista"
          component={() => {
            window.location.href = 'http://www.elnumerodelalista.com';
            return null;
          }}
        />
        <Route
          path="/:id"
          render={props => {
            /* Alphabetical = Region
               Numeric = ShareableDetail */
            let { url } = props.match;
            url = url.substr(1);
            if (url.match(/^[a-zA-Z]*$/)) {
              return <RegionPage {...props} />;
            }
            if (url.match(/^[0-9]*$/)) {
              return <ShareableDetailPage {...props} />;
            }
            return <HomePage {...props} />;
          }}
        />

        <Route path="/" component={HomePage} />
        <Route component={HomePage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
