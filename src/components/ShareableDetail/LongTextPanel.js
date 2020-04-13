import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FieldTitle from './FieldTitle';

const LongTextPanel = ({
  title,
  textArray,
  typography = {},
  paper = { variant: 'outlined', elevation: 2 },
}) => {
  if (!textArray) return '';
  return (
    <Grid item>
      <Paper {...paper}>
        <FieldTitle title={title} />
        <Typography {...typography}>
          {textArray.map(ta => (
            <span key={ta.substring(0, 32)}>
              {ta}
              <br />
            </span>
          ))}
        </Typography>
      </Paper>
    </Grid>
  );
};

LongTextPanel.propTypes = {
  title: PropTypes.string.isRequired,
  textArray: PropTypes.array.isRequired,
  typography: PropTypes.object,
  paper: PropTypes.object,
};

export default LongTextPanel;
