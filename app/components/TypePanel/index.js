/**
 *
 * TypePanel
 *
 *       {renderType()}
 {listCategories()}

 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { plainIcons } from '../../images';

function TypePanel({ type }) {
  return (
    <div className="iw-detail-type">
      <span>
        {' '}
        <img
          className="iw-detail-type-icon"
          alt={`${type}`}
          align="left"
          src={plainIcons[type]}
        />
      </span>
      &nbsp;
      <span>{type}</span>
    </div>
  );
}

TypePanel.propTypes = {};

export default TypePanel;
