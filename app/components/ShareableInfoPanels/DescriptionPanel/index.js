/**
 *
 * DescriptionPanel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function DescriptionPanel() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

DescriptionPanel.propTypes = {};

export default DescriptionPanel;
