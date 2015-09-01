import React, { Component, PropTypes } from 'react';
import Counter from '../../Counter';

export default class adTitlePanel extends Component {
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
        <h2 className="panel-title"> Ad Title <sup>*</sup></h2>
        <div className="panel-content">
          <div className="grid-row">
            <div className="grid-col-12 grid-col-m-6 form-element">
              <input type="text" name="item-description" onChange={(e)=>actions.updateAdTitle(e.target.value)} />
            </div>
            <div className="grid-col-12 grid-col-m-6 form-element">
              <span className="form-row-label"><Counter value={postadFormState.adTitle} countFrom="100" countTo="0" /> characters remaining</span>
            </div>
            <div className="grid-col-12 space-mts">
              <p>Write a short description of your ad and include all of the key highlights.</p>
              <h3 className="h2 border-t space-ptm space-pbs space-mvn">Label as urgent:</h3>
              <div className="grid-row">
                <div className="grid-col-6 grid-col-m-10 space-mbxs form-element">
                  <input type="checkbox" id="featureUrgent" name="featureUrgent" className="checkbox-switch" onChange={(e)=>actions.updateCheckbox("UPDATE_AD_URGENT", e.target.checked)} checked={postadFormState.urgent} />
                  <label htmlFor="featureUrgent" className="form-row-label">
                    <span className="label-urgent-l space-mrxs">Urgent </span>
                    <span className="hide-fully-to-m"><strong>7 days - £3.99 </strong>
                      Let people know you want to sell, rent or hire quickly. <a href="#">View example</a>
                    </span>
                  </label>
                </div>
                <div className="grid-col-6 hide-fully-from-m space-mbxs txt-right">
                  <strong>7 days - £3.99 </strong>
                </div>
                <label htmlFor="featureUrgent" className="grid-col-12 hide-fully-from-m">
                  Let people know you want to sell, rent or hire quickly. <a href="#">View example</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
