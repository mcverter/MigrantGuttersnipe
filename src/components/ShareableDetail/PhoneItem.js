import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/Phone';

const PhoneItem = ({ phone }) => {
  function makePhoneCall() {
    window.open(`tel:${phone}`);
    return false;
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={makePhoneCall}
        startIcon={<PhoneIcon />}
      >
        LLAMAR {phone}
      </Button>
    </div>
  );
};

PhoneItem.propTypes = {
  phone: PropTypes.string.isRequired,
};

export default PhoneItem;
