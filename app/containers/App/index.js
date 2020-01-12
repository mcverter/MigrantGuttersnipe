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
import RegionPage from '../RegionPage';
import ShareableDetailPage from '../ShareableDetailPage';
import GlobalStyle from '../../global-styles';
import {shareablesByKey, shareablesByRegion} from "../../data";
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/Tijuana" component={Tijuana} />
        <Route path="/Tapachula" component={Tapachula} />
        <Route path="/Region/:regionID"
               render={(props) => <RegionPage
                 {...props} shareablesByRegion={shareablesByRegion} />} />
        <Route path="/Shareable/:shareableID"
               render={(props) => <ShareableDetailPage
                 {...props} shareablesByKey={shareablesByKey} />} />
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
