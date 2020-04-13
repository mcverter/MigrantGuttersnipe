import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FieldTitle from './FieldTitle';

const TextPanel = ({
  title,
  text,
  typography = {},
  paper = { variant: 'outlined', elevation: 2 },
}) => (
  <Grid item>
    <Paper {...paper}>
      <FieldTitle title={title} />
      <Typography {...typography}>{text}</Typography>
    </Paper>
  </Grid>
);

TextPanel.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  typography: PropTypes.object,
  paper: PropTypes.object,
};

export default TextPanel;
