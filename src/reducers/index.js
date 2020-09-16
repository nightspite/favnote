/* eslint-disable no-underscore-dangle */
import {
  ADD_ITEM_SUCCESS,
  AUTH_SUCCESS,
  FETCH_SUCCESS,
  REMOVE_ITEM_SUCCESS,
} from 'actions';

const initialState = {
  userID: '5f5c7dc6ed4b7c011ae516ea',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.data,
        ],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(
            item => item._id !== action.payload.id,
          ),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
