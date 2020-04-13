import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FieldTitle from './FieldTitle';
import { getPlainIcon } from '../../images';

const TypePanel = ({ type }) => (
  <Grid item>
    <Paper variant="outlined" elevation={2}>
      <FieldTitle title="categoria" />
      <Typography variant="body1">
        {getPlainIcon(type)}
        &nbsp;
        {type}
      </Typography>
    </Paper>
  </Grid>
);

TypePanel.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TypePanel;
