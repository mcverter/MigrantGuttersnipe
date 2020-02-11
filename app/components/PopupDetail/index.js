/**
 *
 * PopupDetail
 *
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';


import Button from '@material-ui/core/Button';
import Details from '@material-ui/icons/Info';
import {getPlainIcon} from '../../images';


function PopupDetail({ shareable, shareableKey }) {
  const { name, type } = shareable;
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item>
        <Card>
          <Typography variant="h5" color="textSecondary">
            {name}
          </Typography>
          <Typography variant="body1">
            <span> &nbsp; {getPlainIcon(type)}  &nbsp;{type}</span>
          </Typography>
        </Card>
      </Grid>
      <Grid item>
        <Link to={`/${shareableKey}`} style={{textDecoration: "none"}}>
          <Button
            variant='contained'
            color='primary'
            startIcon={<Details/>}
          >
            Mas Informacion
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

const Styles = {
  moreDetailButton: {
    backgroundColor: 'darkgreen',
    color: 'white',
    fontWeight: 700,
    fontSize: '125%',
  },
  typeIcon: {
    height: '14px',
    padding: '1px',
    margin: '1px',
  },
  typePanel: {
    fontWeight: 600,
    color: 'maroon',
    border: '2px solid maroon',
  },
};
PopupDetail.propTypes = {};

export default PopupDetail;
