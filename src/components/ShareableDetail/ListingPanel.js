import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FieldTitle from './FieldTitle';

const ListingPanel = ({
  title,
  listingArray,
  typography = {},
  paper = { variant: 'outlined', elevation: 2 },
}) => {
  if (!listingArray) {
    return '';
  }
  return (
    <Grid item>
      <Paper {...paper}>
        <FieldTitle title={title} />
        <Typography {...typography}>
          {listingArray.map(la => (
            <li key={la.substring(0, 32)}>{la}</li>
          ))}
        </Typography>
      </Paper>
    </Grid>
  );
};

ListingPanel.propTypes = {
  title: PropTypes.string.isRequired,
  listingArray: PropTypes.array.isRequired,
  typography: PropTypes.object,
  paper: PropTypes.object,
};

export default ListingPanel;
