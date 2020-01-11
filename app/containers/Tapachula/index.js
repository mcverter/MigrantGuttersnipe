import React from 'react';
import PropTypes from 'prop-types';
import GuttersnipeMap from '../GuttersnipeMap';
import { shareables } from './tapachula';

export default function Tapachula() {
  const center = { lat: 15.582594, lng: -92.016658 };
  const zoom = 7;
  return (
    <GuttersnipeMap
      style={{ height: '100%', width: '100%' }}
      shareables={shareables}
      center={center}
      zoom={zoom}
      title="Recursos en Chiapas"
    />
  );
}

Tapachula.propTypes = {};
