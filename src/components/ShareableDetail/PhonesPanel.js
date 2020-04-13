import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FieldTitle from './FieldTitle';
import PhoneItem from './PhoneItem';
import { isNonEmptyArray } from '../../utils/index';

const PhonesPanel = ({ phones }) =>
  isNonEmptyArray(phones) ? (
    <Grid item>
      <Paper variant="outlined" elevation={2}>
        <FieldTitle title="telefones" />
        {phones.map(p => (
          <PhoneItem phone={p} key={p} />
        ))}
      </Paper>
    </Grid>
  ) : (
    ''
  );

PhonesPanel.propTypes = {
  phones: PropTypes.array,
};

export default PhonesPanel;
