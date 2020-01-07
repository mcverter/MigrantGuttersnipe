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
import Tijuana from '../../containers/Tijuana';
import Tapachula from '../../containers/Tapachula';
import HomePage from '../../containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
export default function App() {
  return (
    <div>
      <Switch>
        <Route path={"/Tijuana"} component={Tijuana}/>
        <Route path={"/Tapachula"} component={Tapachula}/>
        <Route path={'/elnumerodelalista'} component={() => {
          debugger;
//          window.open('http://www.elnumerodelalista.com'/*, "_blank"*/);
          window.location.href = 'http://www.elnumerodelalista.com';
          return null;
        }}/>
        <Route path={"/"} component={HomePage}/>
        <Route component={HomePage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
