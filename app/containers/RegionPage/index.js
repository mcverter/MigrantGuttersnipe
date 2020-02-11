/**
 *
 * RegionPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import GuttersnipeMap from '../GuttersnipeMap';

export function RegionPage(props) {
  let { region, shareablesByRegion } = props;
  const regionID =
    region.charAt(1).toUpperCase() + region.substring(2).toLowerCase();
  const data = shareablesByRegion[regionID];
  const { center, zoom, shareables } = data;

  return (
    <GuttersnipeMap
      style={{ height: '100%', width: '100%' }}
      shareables={shareables}
      center={center}
      zoom={zoom}
      title={`Recursos en ${regionID}`}
    />
  );
}

const mapStateToProps = state => {
  return ({
    region: state.router.location.pathname,
    shareablesByRegion: state.App.shareablesByRegion
  })};

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(RegionPage);
