import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from 'components/Spinner';
import EnrichmentTemplate from 'components/EnrichmentTemplate';

import * as actions from '../StaticPages/actions';
import {
  makeSelectLoading,
  makeSelectEnrichment,
  makeSelectSuccess,
} from '../StaticPages/selectors';

class Enrichment extends Component {
  componentWillMount() {
    const {
      getStaticPage,
      enrichment,
    } = this.props;

    // Only fetch page data if not already loaded
    if (!enrichment) getStaticPage('Enrichment');
  }

  render() {
    const {
      loading,
      loadSuccess,
      enrichment,
    } = this.props;

    return (
      <div>
        {!loading && !loadSuccess && <strong>Something went wrong. Please refresh or try again later</strong>}
        {loading ? <Spinner /> : enrichment && <EnrichmentTemplate data={enrichment} />}
      </div>
    );
  }
}

Enrichment.propTypes = {
  getStaticPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadSuccess: PropTypes.bool.isRequired,
  enrichment: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  loadSuccess: makeSelectSuccess(),
  enrichment: makeSelectEnrichment(),
});

export default connect(mapStateToProps, actions)(Enrichment);
