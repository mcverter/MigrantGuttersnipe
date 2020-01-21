/**
 *
 * AddressPanel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AddressPanel() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AddressPanel.propTypes = {};

export default AddressPanel;
