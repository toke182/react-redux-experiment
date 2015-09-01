import React, { Component, PropTypes } from 'react';
import Counter from '../../Counter';


export default class DescriptionPanel extends Component {
  static propTypes = {
    postadStateState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  //TODO: Ask what is this
  constructor(props) {
    super(props);
  }

  render() {
    //TODO should this be a const?
  	let {postadFormState, actions} = this.props;
    return (
      <div className="panel">
        <h2 className="panel-title">
          <span className="panel-validation"></span>
          Description <sup>*</sup>
          <span className="panel-summary hide-fully-from-m"></span>
        </h2>
        <div className="panel-content">
          <div className="grid-row">
            <div className="grid-col-12 grid-col-m-6 space-mbxs form-element">
              <textarea name="description" id="description" onChange={(e)=>actions.updateDescription(e.target.value)} />
            </div>
            <div className="grid-col-12 grid-col-m-6">
              <p><Counter value={postadFormState.adDescription} countFrom="1000" countTo="0"/> characters remaining (12 words minimum).</p>
              <p className="space-mbn">
                Enter as much information possible; 
                ads with detailed and longer descriptions 
                get more views and replies!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
