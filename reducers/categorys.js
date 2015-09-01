import { CATEGORYS_FETCHED } from '../constants/ActionTypes';

const initialState = {};

export default function categorys(state = initialState, action) {
  switch (action.type) {
  case CATEGORYS_FETCHED:

    // TODO update state with the data

    return Object.assign({}, state, action.data);

  default:
    return state;
  }
}
