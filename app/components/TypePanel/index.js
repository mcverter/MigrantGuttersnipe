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
    <div style={Styles.typePanel}>
      <span>
        {' '}
        <img
          style={Styles.typeIcon}
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

const Styles = {
  typeIcon: {
    height: '14px',
    padding: '1px',
    margin: '1px',
  },
  typePanel: {
    fontWeight: 600,
    color: 'maroon',
    border: '2px solid maroon',
  },
};
TypePanel.propTypes = {};

export default TypePanel;
