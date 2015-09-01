import React, { Component, PropTypes } from 'react';

export default class totalPanel extends Component {
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
    <div className="panel-dark">
      <div className="panel-content">
        <strong>Total £3.00</strong>
        
      </div>
    </div>
    );
  }
}
