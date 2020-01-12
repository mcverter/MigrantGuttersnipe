import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Collapsible from 'react-collapsible';

import { plainIcons } from '../../images';
import { stringToHash } from '../../utils/utils';
import GoogleMapsOpener from '../GoogleMapsOpener';
import './styles.scss';

const InfoWindowDetail = ({ shareable }) => {
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

  const renderHours = () => (
    <div className="iw-detail-hours">
      <div>{hours}</div>
    </div>
  );
  const renderAddress = () => (
    <div className="iw-detail-address">
      <div>{address}</div>
      <GoogleMapsOpener {...shareable} />
    </div>
  );

  const listCategories = () => (
    <ul className="iw-detail-categories">
      {features && features.map(f => <li key={stringToHash(f)}>{f}</li>)}
    </ul>
  );

  const renderType = () => (
    <div className="iw-detail-type">
      <span>
        {' '}
        <img
          className="iw-detail-type-icon"
          alt={`${type}`}
          align="left"
          src={plainIcons[type]}
        />
      </span>
      &nbsp;
      <span>{type}</span>
    </div>
  );
  const renderName = () => (
    <div className="iw-detail-name">
      <span>{name}</span>
      {renderType()}
      {listCategories()}
    </div>
  );

  const renderWebsites = () => {
    if (!websites || websites.length < 1) {
      return '';
    }
    return (
      <Collapsible trigger="Sitios de Web" className="iw-detail-websites">
        <ul>
          {websites.map(w => (
            <li key={stringToHash(w)}>
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
      </Collapsible>
    );
  };

  const renderRawHTMLInCollapsible = ({ trigger, element }) => (
    <div className="iw-detail-description">
      <Collapsible trigger={trigger}>{ReactHtmlParser(element)}</Collapsible>
    </div>
  );

  const renderNotes = () =>
    renderRawHTMLInCollapsible({ trigger: 'Notes', element: notes });

  const renderDescription = () =>
    renderRawHTMLInCollapsible({
      trigger: 'Descripcion',
      element: description,
    });

  const renderPhones = () =>
    !phones || !Array.isArray(phones) || phones.length < 1 ? (
      ''
    ) : (
      <div>{phones.map(p => renderPhone(p))}</div>
    );

  const renderPhone = phone => {
    function makePhoneCall() {
      window.open(`tel:${phone}`);
      return false;
    }

    return (
      <div className="iw-detail-phone" key={stringToHash(phone)}>
        <div>
          <span>
            <img align="left" src={plainIcons.phone} alt="phone" />
          </span>
          {phone}
        </div>
        <div className="phone-caller" onClick={makePhoneCall}>
          LLAMAR
        </div>
      </div>
    );
  };

  return (
    <div className="iw-detail-container">
      {name && renderName()}
      {address && renderAddress()}
      {phones && renderPhones(phones)}
      {description && renderDescription(description)}
      {websites && renderWebsites()}
      {hours && renderHours()}
      {notes && renderNotes(notes)}
    </div>
  );
};

InfoWindowDetail.propTypes = {
  shareable: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    coordinates: PropTypes.array.isRequired,
    description: PropTypes.string,
    phones: PropTypes.array,
    address: PropTypes.string,
    notes: PropTypes.string,
    websites: PropTypes.array,
  }),
};

export default InfoWindowDetail;
