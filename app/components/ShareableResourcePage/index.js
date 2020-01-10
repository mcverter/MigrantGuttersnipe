/**
 *
 * ShareableResourcePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ShareableResourcePage() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ShareableResourcePage.propTypes = {};

export default ShareableResourcePage;
