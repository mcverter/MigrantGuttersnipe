/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../HomePage';
import RegionPage from '../RegionPage';
import ShareableDetailPage from '../ShareableDetailPage';
import GlobalStyle from '../../global-styles';
import { fetchAllData } from '../../redux/actions';

class App extends Component {
  componentDidMount() {
    debugger;
    const { dispatch } = this.props;
    dispatch(dispatch(fetchAllData));
  }

  render() {
    console.log('props', this.props.shareables, this.props.regions);
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
              let { url } = props.match;
              url = url.substr(1);
              if (url.match(/^[a-zA-Z]*$/)) {
                return (
                  <RegionPage
                    shareablesByRegion={shareablesByRegion}
                    regionID={url}
                  />
                );
              }
              if (url.match(/^[0-9]*$/)) {
                return (
                  <ShareableDetailPage
                    shareablesByKey={shareablesByKey}
                    shareableID={url}
                  />
                );
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
}

function mapStateToProps(state) {
  return {
    shareables: state.shareablesReducer.shareables,
    regions: state.regionsReducer.regions,
  };
}

export default connect(mapStateToProps)(App);
