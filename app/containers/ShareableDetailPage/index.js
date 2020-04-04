import React from 'react';
import PropTypes from 'prop-types';
import ShareableDetail from '../../components/ShareableDetail';

function ShareableDetailPage(props) {
  const { shareableID, shareablesByKey } = props;
  const shareable = shareablesByKey[shareableID];

  return <ShareableDetail shareable={shareable} />;
}

ShareableDetailPage.propTypes = {
  shareableID: PropTypes.string,
  shareablesByKey: PropTypes.object,
};

export default ShareableDetailPage;
