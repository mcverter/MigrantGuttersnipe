/**
 *
 * GuttersnipeMarker
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import { getLeafletIcon } from '../../images';
import PopupDetail from '../PopupDetail';

class GuttersnipeMarker extends Component {
  render() {
    const {
      markerKey,
      shareable,
      addRef,
      showPopup,
      position,
      markerRef,
    } = this.props;
    addRef(markerKey, markerRef);

    return (
      <Marker
        onclick={() => {
          showPopup(markerKey);
        }}
        ref={markerRef}
        position={position}
        icon={getLeafletIcon(shareable.type)}
      >
        <Popup>
          <PopupDetail shareable={shareable} shareableKey={markerKey} />
        </Popup>
      </Marker>
    );
  }
}

GuttersnipeMarker.propTypes = {
  markerKey: PropTypes.number,
  shareable: PropTypes.object,
  addRef: PropTypes.func,
  showPopup: PropTypes.func,
  position: PropTypes.array,
  markerRef: PropTypes.object,
};

export default GuttersnipeMarker;
