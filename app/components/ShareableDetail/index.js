import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AddressPanel from './AddressPanel';
import TextPanel from './TextPanel';
import TypePanel from './TypePanel';
import ListingPanel from './ListingPanel';
import PhonesPanel from './PhonesPanel';
import WebsitesPanel from './WebsitesPanel';
import LongTextPanel from './LongTextPanel';

import './styles.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  item: {
    padding: theme.spacing(1),
  },
}));

export function ShareableDetail(props) {
  const { shareable } = props;
  const {
    name,
    type,
    features,
    description,
    phones,
    address,
    notes,
    websites,
    hours,
  } = shareable;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        padding={2}
        alignItems="stretch"
        direction="column"
        justify="space-around"
      >
        {name && (
          <TextPanel
            title="nombre"
            typography={{ variant: 'h5', color: 'textSecondary' }}
            text={name}
          />
        )}
        {type && <TypePanel type={type} />}
        {features && Array.isArray(features) && (
          <ListingPanel listingArray={features} title="servicios" />
        )}
        {address && <AddressPanel address={address} shareable={shareable} />}
        {phones && <PhonesPanel phones={phones} />}
        {websites && <WebsitesPanel websites={websites} />}
        {hours && Array.isArray(hours) && (
          <ListingPanel listingArray={hours} title="horario" />
        )}
        {description && Array.isArray(description) && (
          <LongTextPanel textArray={description} title="descripción" />
        )}
        {notes && Array.isArray(notes) && (
          <LongTextPanel textArray={notes} title="notas adicionales" />
        )}
        <Grid item>
          <Link to={`/region/${shareable.region}`}>
            <h1> Mapa de Recursos en {shareable.region}</h1>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

ShareableDetail.propTypes = {
  shareable: PropTypes.object,
};

const withConnect = connect();

export default compose(withConnect)(ShareableDetail);
