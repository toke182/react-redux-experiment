import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import thunk from 'redux-thunk';
import Main from '../components/Main';
import AdTitlePanel from '../components/postad/partials/adTitlePanel';
import DescriptionPanel from '../components/postad/partials/descriptionPanel';
import TotalPanel from '../components/postad/partials/totalPanel';
import * as PostadActions from '../actions/PostadActions';

export default class PostAd extends Component {
  render() {
    return (
      <Connector select={state => ({ categoryState: state.categorys, advertState: state.advert, postadFormState: state.postadForm })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ categoryState, advertState, postadFormState, dispatch }) {
    const actions = bindActionCreators(PostadActions, dispatch);
    return (
      <div className="grid-row">
        {/* <Main categoryState={categoryState} advertState={advertState} actions={actions} /> */}
        <AdTitlePanel postadFormState={postadFormState} actions={actions} />
        <DescriptionPanel postadFormState={postadFormState} actions={actions} />
        <TotalPanel postadFormState={postadFormState} actions={actions} />
      </div>
    );
  }
}
