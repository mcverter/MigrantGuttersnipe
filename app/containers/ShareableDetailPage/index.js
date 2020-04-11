import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShareableDetail from '../../components/ShareableDetail';
import { connect } from 'react-redux'
import { fetchAllShareablesIfNeeded } from '../../redux/actions';

class ShareableDetailPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchShareableData()
  }
  render() {
    const shareable = this.props.shareables.find(s => s.id === parseInt(this.props.match.params.id))

    return <ShareableDetail shareable={shareable} />;
  }
}

ShareableDetailPage.propTypes = {
  shareableID: PropTypes.string,
  shareablesByKey: PropTypes.object,
};

function mapStateToProps(state) {
  console.log('state', state)
  return {
    shareables: state.app.shareables,
  };
}

export default connect(mapStateToProps)(ShareableDetailPage);
