/**
 *
 * RegionPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import GuttersnipeMap from '../GuttersnipeMap';

export function RegionPage(props) {
  const { regionID, shareablesByRegion } = props;
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

RegionPage.propTypes = {
  regionID: PropTypes.string.isRequired,
  shareablesByRegion: PropTypes.object.isRequired,
};

export default RegionPage;
