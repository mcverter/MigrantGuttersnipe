import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import { leafletIcons } from '../../images';
import InfoWindowDetail from '../InfoWindowDetail';
const popup = React.createRef();


const GuttersnipeMarker = (shareable) => {
  const {coordinates, type, name} = shareable;
  if(!coordinates || ! Array.isArray(coordinates) || coordinates.length !== 2) {return ("");}
  const markerPosition = [coordinates[1], coordinates[0]];

  function closePopup() {
    popup.current.leafletElement.options.leaflet.map.closePopup();
  }

  return (
    <Marker
      position={markerPosition}
      label={''}
      icon={leafletIcons[type]}
    >
      <Tooltip>{name}</Tooltip>
      <Popup ref={popup}>
        <InfoWindowDetail {...shareable} />
        <div
          className="map-popup-close-btn"
          onClick={closePopup}
        >
          CERRAR
        </div>
      </Popup>
    </Marker>
  );
};

export default GuttersnipeMarker;
