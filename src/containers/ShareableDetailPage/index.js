import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ShareableDetail from '../../components/ShareableDetail';
import { useSelector, useDispatch } from 'react-redux'
import { loadSingleShareable } from '../../actions/shareableActions';

function ShareableDetailPage (props) {
  const dispatch = useDispatch();

  let id = props.match.params.id
  useEffect(() => {dispatch(loadSingleShareable(id))})
  /* useEffect(() => {
    if(firebase.getCurrentUsername()) {
      firebase.getCurrentUserQuote().then(setQuote)
    }
  }, [firebase.getCurrentUsername(), firebase.getCurrentUserQuote()])

  if(!firebase.getCurrentUsername()) {
  ...
    return null
  }
  debugger;
  */

  const shareable = useSelector(state => {
    let shareable = state.app.currentShareable
    console.log(shareable);
    debugger;
    return shareable;
  });

//  return <div>hello world</div>
  console.log('currentSelector', shareable)
  return shareable ?  <ShareableDetail shareable={shareable}/> : <div>Loading</div>;
}

export default ShareableDetailPage;
