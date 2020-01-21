/**
 *
 * PopupDetail
 *
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NamePanel from '../ShareableInfoPanels/NamePanel';
import TypePanel from '../ShareableInfoPanels/TypePanel';
// import PropTypes from 'prop-types';

function PopupDetail({ shareable, shareableKey }) {
  const { name, type } = shareable;
  // const [detailVisible, setDetailVisible] = useState(false);

  return (
    <div>
      <NamePanel name={name} />
      <TypePanel type={type} />
      <Link style={Styles.moreDetailButton} to={`/${shareableKey}`}>
        Mas Informacion
      </Link>
    </div>
  );
}

const Styles = {
  moreDetailButton: {
    backgroundColor: 'darkgreen',
    color: 'white',
    fontWeight: 700,
    fontSize: '125%',
  },
};
PopupDetail.propTypes = {};

export default PopupDetail;
