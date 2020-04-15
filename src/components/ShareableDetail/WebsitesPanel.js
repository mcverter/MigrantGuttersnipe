import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FieldTitle from './FieldTitle';
import { isNonEmptyArray } from '../../utils/index';

const WebsitesPanel = ({ websites }) =>
  isNonEmptyArray(websites) ? (
    <Grid item>
      <Paper variant="outlined" elevation={2}>
        <FieldTitle title="sitios de web" />
        <ul>
          {websites.map((w) => (
            <li key={w.substring(0, 32)}>
              {w.search('@') === -1 ? (
                <a href={w} target="_blank" rel="noopener noreferrer">
                  {w}
                </a>
              ) : (
                <a href={`mailto:${w}`}>{w}</a>
              )}
            </li>
          ))}
        </ul>
      </Paper>
    </Grid>
  ) : null;

WebsitesPanel.propTypes = {
  websites: PropTypes.array,
};

export default WebsitesPanel;
