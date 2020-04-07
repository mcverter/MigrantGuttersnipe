import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShareableDetail from '../../components/ShareableDetail';
import { makeKeyFromShareable } from '../../utils/utils';

class ShareableDetailPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { shareableID, shareablesByKey } = this.props;
    const shareable = shareablesByKey[shareableID];

    const { shareables } = this.props;
    const shareableId = this.props.match.params.id;

    shareable = shareables.filter(s => {
      const key = makeKeyFromShareable(s);
      console.log(key);
      return key === shareableId;
    })[0];

    console.log(shareable);
    return <ShareableDetail shareable={shareable} />;
  }
}

ShareableDetailPage.propTypes = {
  shareableID: PropTypes.string,
  shareablesByKey: PropTypes.object,
};

export default ShareableDetailPage;
