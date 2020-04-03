/**
 *
 * RegionPageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRegionPageContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export function RegionPageContainer() {
  useInjectReducer({ key: 'regionPageContainer', reducer });
  useInjectSaga({ key: 'regionPageContainer', saga });

  return <div />;
}

RegionPageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  regionPageContainer: makeSelectRegionPageContainer(),
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

export default compose(withConnect)(RegionPageContainer);
