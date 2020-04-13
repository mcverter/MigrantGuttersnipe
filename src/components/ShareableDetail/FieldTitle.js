import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const FieldTitle = ({ title }) => (
  <Typography variant="h6" color="primary">
    {title}
  </Typography>
);

FieldTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FieldTitle;
