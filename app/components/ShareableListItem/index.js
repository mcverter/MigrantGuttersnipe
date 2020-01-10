/**
 *
 * ShareableListItem
 *
 */

import React from 'react';
import { plainIcons } from '../../images';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

console.log('plain', plainIcons);
function ShareableListItem(props) {
  const { shareable, itemKey, onListItemClicked } = props;
  return (
    <div
      onClick={() => {
        onListItemClicked(itemKey);
      }}
    >
      <span>
        &nbsp;
        <img height="18px" align="left" src={plainIcons[shareable.type]} />
      </span>
      &nbsp;
      {shareable.name} ({shareable.type})
    </div>
  );
}

ShareableListItem.propTypes = {};

export default ShareableListItem;
