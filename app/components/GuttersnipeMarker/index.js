/**
 *
 * GuttersnipeMarker
 *
 */

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import { getLeafletIcon } from '../../images';
import PopupDetail from '../PopupDetail';

class GuttersnipeMarker extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let self = this;
    const {markerKey,shareable, addRef, showPopup, position, markerRef} = this.props;
    addRef(markerKey, markerRef)

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

GuttersnipeMarker.propTypes = {};

export default GuttersnipeMarker;
