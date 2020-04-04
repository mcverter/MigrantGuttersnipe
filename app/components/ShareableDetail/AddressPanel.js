import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GoogleMapsOpener from '../GoogleMapsOpener/index';
import FieldTitle from './FieldTitle';

const AddressPanel = ({ address, shareable }) => (
  <Grid item>
    <Paper variant="outlined" elevation={2}>
      <FieldTitle title="dirección" />
      <Typography variant="body1">{address}</Typography>
      <GoogleMapsOpener shareable={shareable} />
    </Paper>
  </Grid>
);

AddressPanel.propTypes = {
  address: PropTypes.string.isRequired,
  shareable: PropTypes.object.isRequired,
};

export default AddressPanel;
