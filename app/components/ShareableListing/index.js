/**
 *
 * ShareableListing
 *
 */

import React from 'react';
import ShareableListItem from '../ShareableListItem';
import {makeKeyFromShareable} from '../../utils/utils';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ShareableListing(props) {
  const { shareables, onListItemClicked, title } = props;
  return (
    <div style={{ maxHeight: '27vh', overflow: 'scroll', fontSize: '1.25rem' }}>
      <h2>{title}</h2>
      {shareables.map(shareable => {
        const shareableKey = makeKeyFromShareable(shareable);
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
