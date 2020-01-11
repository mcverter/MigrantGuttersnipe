/**
 *
 * NamePanel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function NamePanel({ name }) {
  return (
    <div className="iw-detail-name">
      <span>{name}</span>
    </div>
  );
}

NamePanel.propTypes = {};

export default NamePanel;
