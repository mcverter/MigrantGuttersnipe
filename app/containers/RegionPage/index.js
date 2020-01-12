import React from 'react';
import PropTypes from 'prop-types';
import GuttersnipeMap from '../GuttersnipeMap';

export function RegionPage(props) {
  let { regionID, shareablesByRegion } = props;
  regionID = regionID.toLowerCase();
  const data = shareablesByRegion[regionID];
  const { center, zoom, shareables } = data;
  regionID = regionID.charAt(0).toUpperCase() + regionID.substring(1);

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

RegionPage.propTypes = {};

export default RegionPage;
