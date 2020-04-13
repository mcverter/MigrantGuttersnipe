/**
 *
 * RegionPage
 *
 */

import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import GuttersnipeMap from '../GuttersnipeMap';
import loadRegion from '../../redux/actions'

const dispatch = useDispatch();
useEffect(() => {dispatch(loadRegion)}, [])
const regionShareables = useSelector(state => state.regionShareables)
const regionCoordinates = useSelector(state => state.regionCoordinates)

function RegionPage(props) {
  return (
    <GuttersnipeMap
      style={{ height: '100%', width: '100%' }}
      shareables={regionShareables}
      center={regionCoordinates.center}
      zoom={regionCoordinates.zoom}
      title={`Recursos en ${props.match.params.id}`}
    />
  );
}

RegionPage.propTypes = {
  regionID: PropTypes.string,
  shareablesByRegion: PropTypes.object,
};

export default RegionPage;
/*
  render() {
    console.log('this props', this.props)
    let { shareables, regions } = this.props;
    const regionId = this.props.match.params.id;
    const coordinates = regions[regionId.toLowerCase()];
    shareables = shareables.filter(s => s.region === regionId);

 */
