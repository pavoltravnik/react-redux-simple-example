

import { CHANGE_TOGGLE } from './actions';

// define the default state
export const defaultState = {
  toggle: true,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOGGLE:
      console.log(action);
      return Object.assign({}, state, { toggle: action.toggle });
    default:
      return state;
  }
}


