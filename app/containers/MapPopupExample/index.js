import React, {Component} from 'react';
import {Map, TileLayer, Popup, Marker} from 'react-leaflet';
import './styles.css';
//import {data} from '../Tapachula/tapachula';
import ShareableListing from "../../components/ShareableListing";
import {stringToHash} from "../../utils/utils";
import '../../components/GuttersnipeMap/styles.scss'
import '../../components/GuttersnipeMap/leaflet.css'
import { leafletIcons } from '../../images';
import InfoWindowDetail from "../../components/InfoWindowDetail";
import L from 'leaflet';
const mapRef = React.createRef();

class MapPopupExample extends Component {
//  shareables = data.placemarks;
  shareablesMap = {};

  constructor(props) {
    super(props);
    const {shareables, center, zoom} = props;
    this.state = {
      shareables: shareables,
      currentPopup: undefined,
      lat: center.lat,
      lng: center.lng,
      zoom: zoom,
      tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    };
    this.markerRefs = {};
    this.makeKey = this.makeKey.bind(this);
    //this.closePopup = this.closePopup.bind(this);
  }

  componentDidMount() {
    this.state.shareables.forEach(s=>{
      this.shareablesMap[this.makeKey(s)] = s;
    })
    this.setState({
//      shareables: shareables
    })
  }
  handleMarkerRef(key, node) {
    this.markerRefs[key] = node;
  }
  closePopup() {
    //   mapRef.current.closePopup()
    //    map.current.leafletElement.options.leaflet.map.closePopup();
  }

  markerClick(key) {
    this.setState({
      lat: this.shareablesMap[key].coordinates[1],
      lng: this.shareablesMap[key].coordinates[0],
      zoom: 16
    }, () => {
      if (this.markerRefs[key]) {
        this.markerRefs[key].leafletElement.openPopup();
      }
    })
  }

  popupClose(key) {
    this.setState({
      lat: this.shareablesMap[key].coordinates[1],
      lng: this.shareablesMap[key].coordinates[0],
      zoom: 16
    }, () => {
      if (this.markerRefs[key]) {
        this.markerRefs[key].leafletElement.closePopup();
      }
    })
  }

  handleMarkerRef(key, node) {
   this.markerRefs[key] = node;
  }
  makeKey(shareable) {
    if (!shareable) return "";
    const {coordinates, name} = shareable;
    return stringToHash(`${coordinates[1]}${coordinates[0]}${name}`);
  }

  render() {
    const self = this;

    return (
      <div className="Map" ref={mapRef}>
        <Map center={[this.state.lat, this.state.lng]}
             zoom={this.state.zoom} style={{width: "100vw", height: "70vh"}}>
             <TileLayer url={this.state.tileUrl}/>
          {this.state.shareables.map(shareable=> {
            const {coordinates} = shareable;
            const markerKey=this.makeKey(shareable)
            const markerPosition = [coordinates[1], coordinates[0]];
            if (!coordinates || coordinates.length !== 2) {return ("")}
            return (
              <Marker
               key={markerKey}
               ref={this.handleMarkerRef.bind(this, markerKey)}
               foo
               onclick={()=>{self.markerClick(markerKey)}}
               position={markerPosition}
               icon={leafletIcons[shareable.type]}
              >
                <Popup>
                  <InfoWindowDetail {...shareable}/>
                  <div
                    className="map-popup-close-btn"
                    onClick={()=>{self.popupClose(markerKey)}}
                  >
                    CERRAR
                  </div>
                </Popup>

              </Marker>
          )})}
        </Map>
        <ShareableListing
          style={{width: "100vw", height: "30vh"}}
          onListItemClicked={this.markerClick.bind(this)}
          shareables={this.state.shareables}
        />
      </div>
    )

  }
}

export default MapPopupExample;

