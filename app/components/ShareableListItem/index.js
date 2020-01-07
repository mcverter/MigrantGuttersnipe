/**
 *
 * ShareableListItem
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ShareableListItem(props) {
  let {text, itemKey, onListItemClicked} = props;
  return (
    <div onClick={()=>{onListItemClicked(itemKey)}}> {text} </div>
  )
}

ShareableListItem.propTypes = {};

export default ShareableListItem;
