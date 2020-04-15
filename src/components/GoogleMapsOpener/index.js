/* eslint-disable camelcase,no-console */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from '@material-ui/core/Button';
import DirectionsIcon from '@material-ui/icons/DirectionsRounded';
const GoogleMapsOpener = ({ shareable }) => {
  const { coordinates, google_place_id, name, address } = shareable;
  const openGoogleMaps = () => {
    const placeOnly = () => {
      let placeURL = `https://www.google.com/maps/search/?api=1&query=${coordinates[1]},${coordinates[0]}`;
      if (google_place_id) {
        placeURL += `&query_place_id=${encodeURIComponent(google_place_id)}`;
      }
      window.open(placeURL, '_blank');
    };

    const directionsFromTo = ({ fromLat, fromLng }) => {
      let directionsURL = `https://www.google.com/maps/dir/?api=1&origin=${fromLat},${fromLng}&destination=${encodeURIComponent(
        name,
      )}+${encodeURIComponent(address)}`;
      if (google_place_id) {
        directionsURL += `&destination_id=${encodeURIComponent(
          google_place_id,
        )}`;
      }
      window.open(directionsURL, '_blank');
    };

    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
      return placeOnly();
    }
    console.log('Locating…');
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      const { latitude, longitude } = position.coords;
      return directionsFromTo({ fromLat: latitude, fromLng: longitude });
    }

    function error() {
      console.log('Unable to retrieve your location');
      return placeOnly();
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<DirectionsIcon />}
      onClick={() => {
        openGoogleMaps();
      }}
    >
      DIRECCIONES
    </Button>
  );
};

GoogleMapsOpener.propTypes = {
  shareable: PropTypes.object.isRequired,
};

export default GoogleMapsOpener;
