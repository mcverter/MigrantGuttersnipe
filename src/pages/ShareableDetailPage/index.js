import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ShareableDetail from '../../components/ShareableDetail/index';
import { useSelector, useDispatch } from 'react-redux'
import { loadSingleShareable } from '../../actions/shareableActions';

function ShareableDetailPage (props) {
  let id = props.match.params.id;
  const shareable = useSelector(state => state.app.currentShareable);

  const dispatch = useDispatch();
  useEffect(() => {dispatch(loadSingleShareable(id))})

  return shareable ?  <ShareableDetail shareable={shareable}/> : <div>Loading</div>;
}

export default ShareableDetailPage;
