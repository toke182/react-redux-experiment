import React, { Component, PropTypes } from 'react';
//import { SOME_ACTION } from '../constants/ActionTypes';

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  updateCount(value, countFrom, countTo) {
    var charsLeft = countFrom - value.length;
    
    return value ? (charsLeft <= countTo) ? countTo : charsLeft : countFrom;
  }

  render() {
    return (
      <span>{this.updateCount(this.props.value, this.props.countFrom, this.props.countTo)}</span>
    );
  }
}
