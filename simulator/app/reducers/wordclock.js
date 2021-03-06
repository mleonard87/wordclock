import { SET_NEO_PIXEL_ARRAY, SET_DISPLAY_MODE } from '../actions/wordclock';

const INITIAL_STATE = {
  displayMode: 'LETTER',
  neoPixelArray: [
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0',
    '0,0,0'
  ]
};

export default function wordclock(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_NEO_PIXEL_ARRAY:
      return {
        ...state,
        neoPixelArray: action.payload.neoPixelArray
      };
    case SET_DISPLAY_MODE:
      return {
        ...state,
        displayMode: action.payload.displayMode
      };
    default:
      return state;
  }
}
