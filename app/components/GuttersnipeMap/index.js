import React from 'react';
import GuttersnipeMarker from '../GuttersnipeMarker';
import {Map, TileLayer } from 'react-leaflet';
import './leaflet.css';
import './styles.scss';
import {stringToHash} from '../../utils/utils'

const GuttersnipeMap = ({ shareables, center, zoom }) => {
  const position = [center.lat, center.lng];
  const key = makeKey();
  function makeKey(shareable) {
    if (!shareable) return "";
    const {coordinates, name} = shareable;
    return stringToHash(`${coordinates[1]}${coordinates[0]}${name}`);
  }

  return (
    <Map className="map" center={position} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shareables &&
      shareables.map(shareable => <GuttersnipeMarker key={makeKey(shareable)}{...shareable}/>)}
    </Map>
  );
};

export default GuttersnipeMap;
