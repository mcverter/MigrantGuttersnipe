import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShareableDetail from '../../components/ShareableDetail';
import { connect } from 'react-redux'
import { fetchAllShareables } from '../../redux/actions';


class ShareableDetailPage extends Component  {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    const { dispatch} = this.props;
    dispatch(dispatch(fetchAllShareables))
  }

  render() {
    const { shareableID, shareablesByKey } = this.props;
    const shareable = shareablesByKey[shareableID];

    return <ShareableDetail shareable={shareable} />;
  }
}

ShareableDetailPage.propTypes = {
  shareableID: PropTypes.string,
  shareablesByKey: PropTypes.object,
};

function mapStateToProps(state) {
  return {}

}

export default connect(mapStateToProps)(ShareableDetailPage);
