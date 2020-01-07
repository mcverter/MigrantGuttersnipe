import React from 'react';
import GuttersnipeMap  from '../../containers/MapPopupExample';
import PropTypes from 'prop-types';
import {data} from './tapachula';


export default function Tapachula() {
  const center = { lat: 15.582594, lng: -92.016658 };
  const zoom = 8;
  const shareables = data.placemarks;
  return (
    <GuttersnipeMap
      style={{ height: '100%', width: '100%' }}
      shareables={shareables}
      center={center}
      zoom={zoom}
    />
  );
}

Tapachula.propTypes = {};
