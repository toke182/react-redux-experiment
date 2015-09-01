import * as types from '../constants/ActionTypes';


export function updateAdTitle(value) {
  return {
    type: types.UPDATE_AD_TITLE,
    data: value
  }
}

export function updateDescription(value) {
  console.log(value);
  return {
    type: types.UPDATE_AD_DESCRIPTION,
    data: value
  }
}

export function updateCheckbox(type, data) {
  return {
    type,
    data
  }
}