/**
 *
 * RegionPage
 *
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import GuttersnipeMap from '../../containers/GuttersnipeMap/index';
import { loadRegion } from '../../actions/regionActions';

function RegionPage(props) {
  let id = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRegion(id.toLowerCase()));
  }, []);

  const region = useSelector((state) => state.app.currentRegion);

  console.log('region page region', region);
  debugger;
  if (!region) {
    return <div>Loading</div>;
  }
  const { shareables, zoom, center } = region;

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
