/**
 *
 * WebsitesPanel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function WebsitesPanel() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

WebsitesPanel.propTypes = {};

export default WebsitesPanel;
