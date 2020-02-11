import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';


import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardContent';
import CardContent from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { plainIcons } from '../../images';
import GoogleMapsOpener from '../../components/GoogleMapsOpener';
const isNonEmptyArray = arr => arr && Array.isArray(arr) && arr.length > 0

const NamePanel = ({ name }) => (
  <Paper variant="outlined" elevation="2">
    <Typography variant="h5" color="textSecondary">
      {name}
    </Typography>
  </Paper>
);

const AddressPanel = ({ address, shareable }) => (
  <Paper>
    <Typography variant="body1">
      {address}
    </Typography>
    <GoogleMapsOpener {...shareable} />
  </Paper>
);

const PhoneItem = ({ phone }) => {
  function makePhoneCall() {
    window.open(`tel:${phone}`);
    return false;
  }

  return (
    <Paper key={phone}>
      <Card>
        <span>
          <img align="left" src={plainIcons.phone} alt="phone"/>
        </span>
        {phone}
      </Card>
      <Button variant="contained" color="primary" onClick={makePhoneCall}>
        LLAMAR
      </Button>
    </Paper>
  );
};

const PhonesPanel = ({ phones }) => (
  isNonEmptyArray(phones) ?
    (<Paper>{phones.map(p => <PhoneItem phone={p}/>)}</Paper>) : null
)

const WebsitesPanel = ({websites}) => (
  isNonEmptyArray(websites) ?
    <Paper>
      Sitios de Web
      <ul>
        {websites.map((w, idx) => (
          <li key={ idx }>
            {w.search('@') === -1 ? (
              <a href={w} target="_blank">
                {w}
              </a>
            ) : (
              <a href={`mailto:${w}`}>{w}</a>
            )}
          </li>
        ))}
      </ul>
    </Paper> : null
)

const TypePanel = ({ type }) =>  (
  <Card>
    <Typography variant="body1">
      <CardMedia
        align="left"
        src={plainIcons[type]}
      />
      &nbsp;
      <CardContent>{type}</CardContent>
    </Typography>
  </Card>
)
const HoursPanel = ({ hours }) =>  (<Paper>{hours}</Paper>);
const DescriptionPanel = ({ description }) => (<div>{description}</div>)
const NotesPanel = ({ notes }) => (<div>{notes}</div>)
const FeaturesPanel = ({ features }) => (
  isNonEmptyArray(features) ?
    <ul>
      {features && features.map((f, idx) => <li key={idx}>{f}</li>)}
    </ul> : null
);






function ShareableDetailPage(props) {
  const { shareableID, shareablesByKey } = props;
  const shareable = shareablesByKey[shareableID.substring(1)];
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

  return (
    <Grid container spacing={1} padding={2} alignItems="center" justify="space-around">
      <div>
        {name && <Grid item><NamePanel name={name} type={type} /></Grid>}
        {features && <Grid item><FeaturesPanel features={features} /></Grid> }
        {description && <Grid item><DescriptionPanel description={description} /></Grid> }
        {address && <Grid item><AddressPanel address={address} /></Grid>}
        {phones && <Grid item><PhonesPanel phone={phones} /></Grid>}
      </div>
      <Link to={`/${shareable.region}`}>
        <h1> Mapa de Recursos en {shareable.region}</h1>
      </Link>
    </Grid>
  );
}

const mapStateToProps = state => {
  return ({
    shareableID: state.router.location.pathname,
    shareablesByKey: state.App.shareablesByKey
  })};

const withConnect = connect(
  mapStateToProps
);


NamePanel.propTypes = {
  name: PropTypes.string,
}

AddressPanel.propTypes = {
  address: PropTypes.string,
  shareable: PropTypes.object,
}

PhoneItem.propTypes = {
  phone: PropTypes.string,
}

PhonesPanel.propTypes = {
  phones: PropTypes.array,
}

WebsitesPanel.propTypes = {
  websites: PropTypes.array,
}

TypePanel.propTypes = {
  type: PropTypes.string,
}

HoursPanel.propTypes = {
  hours: PropTypes.string,
}

DescriptionPanel.propTypes = {
  description: PropTypes.string,
}

NotesPanel.propTypes = {
  notes: PropTypes.string,
}

FeaturesPanel.propTypes = {
  features: PropTypes.array,
}

export default compose(withConnect)(ShareableDetailPage);
