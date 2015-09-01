import React, { Component, PropTypes } from 'react';
//import { SOME_ACTION } from '../constants/ActionTypes';

export default class Main extends Component {
  static propTypes = {
    categoryState: PropTypes.object.isRequired,
    advertState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    //TODO should this be a const?
  	let {categoryState, advertState, actions} = this.props;
    return (
      <div>
      	<a href="#" onClick={(e)=>actions.fetchCatgories(e.target.text)}>Hello</a>
        {categoryState}
        {advertState}
      </div>
    );
  }
}
