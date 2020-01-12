import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams, Link } from 'react-router-dom';
import InfoWindowDetail from '../../components/InfoWindowDetail';
export function ShareableDetailPage(props) {
  const { shareableID } = useParams();
  const { shareablesByKey } = props;
  const shareable = shareablesByKey[shareableID];

  return (
    <div>
      <InfoWindowDetail shareable={shareable} />
      <Link to={`/Region/${shareable.region}`}>
        <h1> Mapa de Recursos en {shareable.region}</h1>
      </Link>
    </div>
  );
}

/*
        <Route
          path="/Shareable/:shareableID"
          render={props => (
            <ShareableDetailPage {...props} shareablesByKey={shareablesByKey} />
          )}
        />

 */
ShareableDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ShareableDetailPage);
