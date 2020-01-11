/**
 *
 * RegionPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRegionPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function RegionPage() {
  useInjectReducer({ key: 'regionPage', reducer });
  useInjectSaga({ key: 'regionPage', saga });

  return <div />;
}

RegionPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  regionPage: makeSelectRegionPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(RegionPage);
