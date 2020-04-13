import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ShareableDetail from '../../components/ShareableDetail';
import { useSelector, useDispatch } from 'react-redux'
import loadSingleShareable from '../../redux/actions';

const dispatch = useDispatch();
useEffect(() => {dispatch(loadSingleShareable)}, [])
const shareable = useSelector(state => state.currentShareable);


function ShareableDetailPage () {
  return <ShareableDetail shareable={shareable}/>;
}

export default ShareableDetailPage;
