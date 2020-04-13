/**
 *
 * RegionPage
 *
 */

import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import GuttersnipeMap from '../GuttersnipeMap';
import { loadRegion } from '../../actions/regionActions'


function RegionPage(props) {
  let id = props.match.params.id
  const region = useSelector(state => state.app.currentRegion);
debugger
  const dispatch = useDispatch();
  useEffect(() => {dispatch(loadRegion(id.toLowerCase()))}, []);

  if (!region) {
    return <div>Loading</div>;
  }
  const {shareables, zoom} = region;
  const center = region.coordinates;

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
