// action types
export const CHANGE_TOGGLE = 'CHANGE_TOGGLE';


// actions
export function changeToggle(toggle) {
  return { type: CHANGE_TOGGLE, toggle };
}
