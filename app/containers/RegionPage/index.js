/**
 *
 * RegionPage
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import GuttersnipeMap from '../GuttersnipeMap';
import { makeKeyFromShareable } from '../../utils/utils';


class RegionPage extends Component{
  constructor(props) {
    super(props);
  }

  render () {
    let {shareables, regions } = this.props;
    const regionId = this.props.match.params.id;
    const coordinates = regions[regionId.toLowerCase()];
    shareables = shareables.filter(s=>s.region===regionId)

    return (
      <GuttersnipeMap
        style={{ height: '100%', width: '100%' }}
        shareables={shareables}
        center={coordinates.center}
        zoom={coordinates.zoom}
        title={`Recursos en ${regionId}`}
      />
    );
  }
}

RegionPage.propTypes = {
  regionID: PropTypes.string,
  shareablesByRegion: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    shareables: state.shareablesReducer.shareables,
    regions: state.regionsReducer.regions
  }
}

export default connect(mapStateToProps)(RegionPage);


/*

 */
