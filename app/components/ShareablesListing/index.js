/**
 *
 * ShareablesListing
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ShareablesListing() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ShareablesListing.propTypes = {};

export default ShareablesListing;
