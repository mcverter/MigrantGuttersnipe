import React, {Component} from 'react';
import {Map, TileLayer, Popup, Marker} from 'react-leaflet';
import './styles.css';
import {data} from '../Tapachula/tapachula';
import ShareableListing from "../../components/ShareableListing";
import {stringToHash} from "../../utils/utils";
import '../../components/GuttersnipeMap/styles.scss'
import '../../components/GuttersnipeMap/leaflet.css'
import { leafletIcons } from '../../images';

class MapPopupExample extends Component {
  shareables = data.placemarks;
  shareablesMap = {};

  constructor(props) {
    super(props);
    this.state = {
      currentPopup: undefined,
      lat: 15.582594,
      lng: -92.016658 ,
      zoom: 8,
      tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    };
    this.markerRefs = {};
    this.makeKey = this.makeKey.bind(this);
  }

  componentDidMount() {
    this.shareables.forEach(s=>{
      this.shareablesMap[this.makeKey(s)] = s;
    })
    this.setState({
//      shareables: shareables
    })
  }
  handleMarkerRef(key, node) {
    this.markerRefs[key] = node;
  }

  markerClick(key) {
    this.setState({
      lat: this.shareablesMap[key].coordinates[1],
      lng: this.shareablesMap[key].coordinates[0],
      zoom: 16
    }, () => {
      if (this.markerRefs[key]) {
        console.log('open popup', this.markerRefs[key].leafletElement.openPopup)
        this.markerRefs[key].leafletElement.openPopup();
      }
    })
  }
  handleMarkerRef(key, node) {
   this.markerRefs[key] = node;
  }
  makeKey(shareable) {
  console.log('shareable', shareable);
    if (!shareable) return "";
    const {coordinates, name} = shareable;
    return stringToHash(`${coordinates[1]}${coordinates[0]}${name}`);
  }



  render() {
    const self = this;

    return (
      <div className="Map">
        <ShareableListing
          onListItemClicked={this.markerClick.bind(this)}
          shareables={this.shareables}
        />
        <Map center={[this.state.lat, this.state.lng]}
             zoom={this.state.zoom}>
             <TileLayer url={this.state.tileUrl}/>
          {this.shareables.map(shareable=> {
            const {coordinates} = shareable;
            const markerKey=this.makeKey(shareable)
            const markerPosition = [coordinates[1], coordinates[0]];
            return (
              <Marker
               key={markerKey}
               ref={this.handleMarkerRef.bind(this, markerKey)}
               onclick={()=>{
                self.markerClick(markerKey)
               }}
               position={markerPosition}
               icon={leafletIcons["ONG"]}
              >
                <Popup>{shareable.name}</Popup>
              </Marker>
          )})}
        </Map>
      </div>
    )

  }
}

export default MapPopupExample;
