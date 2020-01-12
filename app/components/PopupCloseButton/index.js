/**
 *
 * PopupCloseButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PopupCloseButton() {
  return (
    <div
      style={Styles.popupCloseButton}
      onClick={() => {
        self.popupClose(markerKey);
      }}
    >
      x
    </div>
  );
}
const Styles = {
  popupCloseButton: {
    backgroundColor: 'red',
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: '200%',
    margin: '15px auto',
    border: '2px solid black',
    borderRadius: '50%',
    maxWidth: '25%',
  },
};
PopupCloseButton.propTypes = {};

export default PopupCloseButton;
