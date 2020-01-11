/**
 *
 * PopupDetail
 *
 */

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import NamePanel from '../NamePanel';
import TypePanel from '../TypePanel';
import InfoWindowDetail from "../InfoWindowDetail";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PopupDetail({shareable}) {
  const { name, type } = shareable;
  const [detailVisible, setDetailVisible] = useState(false);

  return (
    <div>
      <NamePanel name={name} />
      <TypePanel type={type} />
      {detailVisible ? (
        <div>
          <InfoWindowDetail shareable={shareable} />
          <div
            style={Styles.moreDetailButton}
            onClick={()=>setDetailVisible(false)}>
            Menos Informacion
          </div>
        </div>
        ) : (
        <div
          style={Styles.moreDetailButton}
          onClick={()=>setDetailVisible(true)}>
          Mas Informacion
        </div>
      )}
    </div>
  );
}

const Styles = {
  moreDetailButton: {
    backgroundColor: 'darkgreen',
    color: 'white',
    fontWeight: 700,
    fontSize: "125%"
  }
}
PopupDetail.propTypes = {};

export default PopupDetail;
