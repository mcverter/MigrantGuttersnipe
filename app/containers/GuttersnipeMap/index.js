import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import { makeKeyFromShareable } from '../../utils/utils';
import ShareablesMenu from '../../components/ShareablesMenu';
import GuttersnipeMarker from '../../components/GuttersnipeMarker';
import './styles.scss';

const mapRef = React.createRef();

class GuttersnipeMap extends Component {
  shareablesMap = {};

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
    this.showMarkerPopup = this.showMarkerPopup.bind(this);
    this.addMarkerRef = this.addMarkerRef.bind(this);
  }

  componentDidMount() {
    this.state.shareables.forEach(s => {
      this.shareablesMap[makeKeyFromShareable(s)] = s;
    });
  }

  addMarkerRef(node, key) {
    this.markerRefs[key] = node;
  }

  showMarkerPopup(key) {
    this.setState(
      {
        lat: this.shareablesMap[key].coordinates[1],
        lng: this.shareablesMap[key].coordinates[0],
        zoom: 16,
      },
      () => {
        if (this.markerRefs[key]) {
          this.markerRefs[key].current.leafletElement.openPopup();
        }
      },
    );
  }

  closePopup(key) {
    this.setState(
      {
        lat: this.shareablesMap[key].coordinates[1],
        lng: this.shareablesMap[key].coordinates[0],
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
    const { title } = this.props;

    return (
      <div>
        <ShareablesMenu
          onListItemClicked={this.showMarkerPopup}
          shareables={this.state.shareables}
          title={title}
        />
        <Map
          className="Map"
          ref={mapRef}
          center={[this.state.lat, this.state.lng]}
          zoom={this.state.zoom}
          style={{ width: '100vw', height: '70vh' }}
        >
          <TileLayer url={this.state.tileUrl} />
          {this.state.shareables.map(shareable => {
            const { coordinates } = shareable;
            const markerKey = makeKeyFromShareable(shareable);
            const markerPosition = [coordinates[1], coordinates[0]];
            const ref = React.createRef();
            this.addMarkerRef(ref, markerKey);
            return (
              <GuttersnipeMarker
                markerRef={ref}
                key={markerKey}
                markerKey={markerKey}
                shareable={shareable}
                addRef={this.addMarkerRef}
                showPopup={this.showMarkerPopup}
                position={markerPosition}
              />
            );
          })}
        </Map>
      </div>
    );
  }
}
GuttersnipeMap.propTypes = {
  shareables: PropTypes.array,
  center: PropTypes.object,
  zoom: PropTypes.number,
  title: PropTypes.string,
};

export default GuttersnipeMap;
