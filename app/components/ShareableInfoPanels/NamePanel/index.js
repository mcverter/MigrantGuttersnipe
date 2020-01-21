/**
 *
 * NamePanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function NamePanel({ name }) {
  return (
    <div className="iw-detail-name">
      <span>{name}</span>
    </div>
  );
}

NamePanel.propTypes = {
  name: PropTypes.string,
};

export default NamePanel;
