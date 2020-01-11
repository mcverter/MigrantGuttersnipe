/**
 *
 * PopupDetail
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import NamePanel from '../NamePanel';
import TypePanel from '../TypePanel';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PopupDetail({ name, type, markerKey }) {
  return (
    <div>
      <NamePanel name={name} />
      <TypePanel type={type} />
      <Link to={`ShareableResource/${markerKey}`}>Mas Informacion</Link>
      {markerKey}
    </div>
  );
}

PopupDetail.propTypes = {};

export default PopupDetail;
