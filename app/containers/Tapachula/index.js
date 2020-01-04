import React from 'react';
import GuttersnipeMap  from '../../components/GuttersnipeMap';
import PropTypes from 'prop-types';
import {data} from './tapachula';

export default function Tapachula() {
  const center = { lat: 14.9094914, lng: -92.2644298 };
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
