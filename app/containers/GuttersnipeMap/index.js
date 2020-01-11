import React, { Component } from 'react';
import { Map, TileLayer, Popup, Marker } from 'react-leaflet';
import { stringToHash } from '../../utils/utils';
import { getLeafletIcon } from '../../images';
import InfoWindowDetail from '../../components/InfoWindowDetail';
import ShareableListing from '../../components/ShareableListing';
import './styles.scss';
import PopupDetail from '../../components/PopupDetail';
import { shareables } from '../Tapachula/tapachula';

const mapRef = React.createRef();

class GuttersnipeMap extends Component {
  constructor(props) {
    super(props);
    const { shareables, center, zoom } = props;

    this.state = {
      shareables,
      lat: center.lat,
      lng: center.lng,
      zoom,
      tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    };
    this.markerRefs = {};
  }

  componentDidMount() {}

  handleMarkerRef(key, node) {
    this.markerRefs[key] = node;
  }

  markerClick(key) {
    this.setState(
      {
        lat: shareablesMap[key].coordinates[1],
        lng: shareablesMap[key].coordinates[0],
        zoom: 16,
      },
      () => {
        if (this.markerRefs[key]) {
          this.markerRefs[key].leafletElement.openPopup();
        }
      },
    );
  }

  popupClose(key) {
    this.setState(
      {
        lat: shareablesMap[key].coordinates[1],
        lng: shareablesMap[key].coordinates[0],
        zoom: 16,
      },
      () => {
        if (this.markerRefs[key]) {
          this.markerRefs[key].leafletElement.closePopup();
        }
      },
    );
  }

  render() {
    const self = this;
    const { title } = this.props;
    return (
      <div className="Map" ref={mapRef}>
        <Map
          center={[this.state.lat, this.state.lng]}
          zoom={this.state.zoom}
          style={{ width: '100vw', height: '70vh' }}
        >
          <TileLayer url={this.state.tileUrl} />
          {this.state.shareables.map(shareable => {
            function makeKey(shareable) {
              if (!shareable) return '';
              const { coordinates, name } = shareable;
              return stringToHash(`${coordinates[1]}${coordinates[0]}${name}`);
            }

            const { coordinates, type, name } = shareable;
            const markerKey = makeKey(shareable);
            const markerPosition = [coordinates[1], coordinates[0]];
            if (!coordinates || coordinates.length !== 2) {
              return '';
            }
            return (
              <Marker
                key={markerKey}
                ref={this.handleMarkerRef.bind(this, markerKey)}
                onclick={() => {
                  self.markerClick(markerKey);
                }}
                position={markerPosition}
                icon={getLeafletIcon(shareable.type)}
              >
                <Popup>
                  <PopupDetail name={name} type={type} markerKey={markerKey} />
                </Popup>
              </Marker>
            );
          })}
        </Map>
        <ShareableListing
          style={{ width: '100vw', height: '30vh' }}
          onListItemClicked={this.markerClick.bind(this)}
          shareables={this.state.shareables}
          title={title}
        />
      </div>
    );
  }
}

export default GuttersnipeMap;

/*
                  <div
                    className="map-popup-close-btn"
                    onClick={() => {
                      self.popupClose(markerKey);
                    }}
                  >
                    X
                  </div>

 */
