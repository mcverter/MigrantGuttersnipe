/**
 *
 * CategoriesPanel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CategoriesPanel() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CategoriesPanel.propTypes = {};

export default CategoriesPanel;
