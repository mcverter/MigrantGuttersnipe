/**
 *
 * GuttersnipeMarker
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function GuttersnipeMarker() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

GuttersnipeMarker.propTypes = {};

export default GuttersnipeMarker;
