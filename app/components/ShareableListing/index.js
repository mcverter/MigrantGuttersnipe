/**
 *
 * ShareableListing
 *
 */

import React from 'react';
import ShareableListItem from '../ShareableListItem';
import { stringToHash } from '../../utils/utils';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ShareableListing(props) {
  function makeKey(shareable) {
    if (!shareable) return '';
    const { coordinates, name } = shareable;
    return stringToHash(`${coordinates[1]}${coordinates[0]}${name}`);
  }

  const { shareables, onListItemClicked, title } = props;
  return (
    <div style={{ maxHeight: '300px', overflow: 'scroll' }}>
      <h2>{title}</h2>
      {shareables.map(shareable => {
        const shareableKey = makeKey(shareable);
        return (
          <ShareableListItem
            key={shareableKey}
            itemKey={shareableKey}
            shareable={shareable}
            onListItemClicked={onListItemClicked}
          />
        );
      })}
    </div>
  );
}

ShareableListing.propTypes = {};

export default ShareableListing;
