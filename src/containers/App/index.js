/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../HomePage';
import RegionPage from '../RegionPage';
import ShareableDetailPage from '../ShareableDetailPage';
import { fetchAllData } from '../../actions/global';

class App extends Component {
  componentDidMount() {
  //  debugger;
    const { dispatch } = this.props;
    dispatch(dispatch(fetchAllData));
  }

  render() {
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
          <Route path="/region/:id" component={RegionPage} />
          <Route path="/shareable/:id" component={ShareableDetailPage} />
          <Route
            path="/:id"
            render={props => {
              /* Alphabetical = Region
								 Numeric = ShareableDetail */
              let { url: propsMatchId } = props.match;
              propsMatchId = propsMatchId.substr(1);
              if (propsMatchId.match(/^[a-zA-Z]*$/)) {
                return (
                  <RegionPage
                    regionID={propsMatchId}
                  />
                );
              }
              if (propsMatchId.match(/^[0-9]*$/)) {
                return (
                  <ShareableDetailPage
                    shareableID={propsMatchId}
                  />
                );
              }
              return <HomePage {...props} />;
            }}
          />
          <Route path="/" component={HomePage} />
          <Route component={HomePage} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

App.propTypes = {
  dispatch: PropTypes.func
}

export default connect(mapStateToProps)(App);

/*
old routes to be supported


 */
