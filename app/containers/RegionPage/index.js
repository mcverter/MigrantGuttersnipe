import React from 'react';
import {useParams} from 'react-router-dom'
import GuttersnipeMap from '../GuttersnipeMap';
import PropTypes from 'prop-types';


export function RegionPage(props) {
  let {regionID} = useParams();
  let {shareablesByRegion} = props;
  regionID = regionID.toLowerCase();
  const data = shareablesByRegion[regionID];
  const {center, zoom, shareables} = data;
  regionID = regionID.charAt(0).toUpperCase() + regionID.substring(1);;
  console.log('center', 'zoom', 'regionid', regionID, 'shareables', shareables)

  return    (
    <GuttersnipeMap
      style={{ height: '100%', width: '100%' }}
      shareables={shareables}
      center={center}
      zoom={zoom}
      title={`Recursos en ${regionID}`}
    />);
}

RegionPage.propTypes = {
};


export default RegionPage;
