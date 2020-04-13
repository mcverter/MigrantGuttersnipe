/**
 *
 * RegionPage
 *
 */

import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import GuttersnipeMap from '../GuttersnipeMap';
import { loadRegion } from '../../actions/regions'


function RegionPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(loadRegion)}, []);
  const shareables = useSelector(state => state.currentRegion.shareables);
  const center = useSelector(state => state.currentRegion.coordinates);
  const zoom = useSelector(state => state.currentRegion.zoom);

  let propsMatchId = props.match.params.id || props.propsMatchId;

  return (
    <GuttersnipeMap
      style={{ height: '100%', width: '100%' }}
      shareables={shareables}
      center={center}
      zoom={zoom}
      title={`Recursos en ${propsMatchId}`}
    />
  );
}

RegionPage.propTypes = {
  propsMatchId: PropTypes.string,
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
