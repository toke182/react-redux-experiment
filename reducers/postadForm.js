import { UPDATE_AD_TITLE, UPDATE_AD_URGENT, UPDATE_AD_DESCRIPTION } from '../constants/ActionTypes';

var initialState = {
	"adTitle": "",
	"urgent": true,
	"adDescription": ""
};

export default function postadForm(state = initialState, action) {
  switch (action.type) {
  case UPDATE_AD_TITLE:
    return Object.assign({}, state, {adTitle: action.data});
  case UPDATE_AD_DESCRIPTION:
    return Object.assign({}, state, {adDescription: action.data});
  case UPDATE_AD_URGENT:
    return Object.assign({}, state, {urgent: action.data});
  default:
    return state;
  }
}
