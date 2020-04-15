import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div
      style={{
        fontWeight: '700',
        textAlign: 'center',
        width: '75vw',
        padding: '20px',
        margin: '20px auto',
      }}
    >
      <h1> La Ruta del Migrante </h1>
      <ul style={{ fontSize: '175%' }}>
        <li>
          <Link to="/shareable/2013660">Shareable 2013660</Link>
        </li>
        <li>
          <Link to="/region/Tijuana">Mapa de Recursos en Tijuana, Mexico</Link>
        </li>
        <li>
          <Link to="/region/Tapachula">
            Mapa de Recursos en Tapachula, Mexico
          </Link>
        </li>
        <li>
          <Link to="/elnumerodelalista">El Numero de la Lista (Tijuana)</Link>
        </li>
      </ul>
    </div>
  );
}

/*
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}

 */
