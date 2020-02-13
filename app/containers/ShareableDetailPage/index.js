import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import { getPlainIcon } from '../../images';
import GoogleMapsOpener from '../../components/GoogleMapsOpener';
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

const isNonEmptyArray = arr => arr && Array.isArray(arr) && arr.length > 0;

const FieldTitle = ({ title }) => (
  <Typography variant="h6" color="primary">
    {title}
  </Typography>
);

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

const ListingPanel = ({
                        title,
                        listingArray,
                        typography = {},
                        paper = { variant: 'outlined', elevation: 2 },
                      }) => (
  <Grid item>
    <Paper {...paper}>
      <FieldTitle title={title} />
      <Typography {...typography}>
        {listingArray.map((la, idx) => (
          <li key={ idx }>{la}</li>
        ))}
      </Typography>
    </Paper>
  </Grid>
);

const LongTextPanel = ({
                         title,
                         textArray,
                         typography = {},
                         paper = { variant: 'outlined', elevation: 2 },
                       }) => (
  <Grid item>
    <Paper {...paper}>
      <FieldTitle title={title} />
      <Typography {...typography}>
        {textArray.map((ta, idx) => (
          <Fragment key={ idx }>
            {ta}
            <br />
          </Fragment>
        ))}
      </Typography>
    </Paper>
  </Grid>
);

const AddressPanel = ({ address, shareable }) => (
  <Grid item>
    <Paper variant="outlined" elevation={2}>
      <FieldTitle title="dirección" />
      <Typography variant="body1">{address}</Typography>
      <GoogleMapsOpener shareable={shareable} />
    </Paper>
  </Grid>
);

const PhoneItem = ({ phone }) => {
  function makePhoneCall() {
    window.open(`tel:${phone}`);
    return false;
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={makePhoneCall}
        startIcon={<PhoneIcon />}
      >
        LLAMAR {phone}
      </Button>
    </div>
  );
};

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

const WebsitesPanel = ({ websites }) =>
  isNonEmptyArray(websites) ? (
    <Grid item>
      <Paper variant="outlined" elevation={2}>
        <FieldTitle title="sitios de web" />
        <ul>
          {websites.map((w, idx) => (
            <li key={idx}>
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
      </Paper>
    </Grid>
  ) : null;

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

function ShareableDetailPage(props) {
  const { shareableID, shareablesByKey } = props;
  const shareable = shareablesByKey[shareableID];
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
        {features && <ListingPanel listingArray={features} title="servicios" />}
        {address && <AddressPanel address={address} shareable={shareable} />}
        {phones && <PhonesPanel phones={phones} />}
        {websites && <WebsitesPanel websites={websites} />}
        {hours && <ListingPanel listingArray={hours} title="horario" />}
        {description && (
          <LongTextPanel textArray={description} title="descripción" />
        )}
        {notes && <LongTextPanel textArray={notes} title="notas adicionales" />}
        <Grid item>
          <Link to={`/${shareable.region}`}>
            <h1> Mapa de Recursos en {shareable.region}</h1>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

const withConnect = connect();

AddressPanel.propTypes = {
  address: PropTypes.string.isRequired,
  shareable: PropTypes.object.isRequired,
};

PhoneItem.propTypes = {
  phone: PropTypes.string.isRequired,
};

PhonesPanel.propTypes = {
  phones: PropTypes.array,
};

WebsitesPanel.propTypes = {
  websites: PropTypes.array,
};

TypePanel.propTypes = {
  type: PropTypes.string.isRequired,
};

ListingPanel.propTypes = {
  title: PropTypes.string.isRequired,
  listingArray: PropTypes.array.isRequired,
  typography: PropTypes.object,
  paper: PropTypes.object,
};

LongTextPanel.propTypes = {
  title: PropTypes.string.isRequired,
  textArray: PropTypes.array.isRequired,
  typography: PropTypes.object,
  paper: PropTypes.object,
};

FieldTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

TextPanel.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  typography: PropTypes.object,
  paper: PropTypes.object,
};

export default compose(withConnect)(ShareableDetailPage);
