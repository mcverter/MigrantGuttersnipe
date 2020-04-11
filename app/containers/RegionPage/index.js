/**
 *
 * RegionPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GuttersnipeMap from '../GuttersnipeMap';
import { fetchRegionDataIfNeeded } from '../../redux/actions';

/*
 import React, {useEffect} from 'react';
 import {useSelector, useDispatch} from 'react-redux'
 import './App.css';
 import allActions from './actions'


 const App = () => {
 const counter = useSelector(state => state.counter)
 const currentUser = useSelector(state => state.currentUser)

 const dispatch = useDispatch()

 const user = {name: "Rei"}

 useEffect(() => {
 dispatch(allActions.userActions.setUser(user))
 }, [])

 */
const RegionPage = () => {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    debugger;
    const { dispatch } = this.props;
    const regionId = this.props.match.params.id
    dispatch(fetchRegionDataIfNeeded(regionId));
  }

  componentDidMount() {
    debugger;
    const { dispatch } = this.props;
    const regionId = this.props.match.params.id
    dispatch(fetchRegionDataIfNeeded(regionId));
  }

  render() {
    console.log('this props', this.props)
    let { shareables, regions } = this.props;
    const regionId = this.props.match.params.id;
    const coordinates = regions[regionId.toLowerCase()];
    shareables = shareables.filter(s => s.region === regionId);

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
  console.log('state', state)
  return {
    shareables: state.app.shareables,
    regions: state.app.regions,
  };
}

export default connect(mapStateToProps)(RegionPage);

/*

 */
