import {
  ADD_ITEM,
  REMOVE_ITEM,
  AUTH_SUCCESS,
  // FETCH_REQUEST,
  FETCH_SUCCESS,
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
        // eslint-disable-next-line no-underscore-dangle
        userID: action.payload.data._id,
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.item,
        ],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(
            item => item.id !== action.payload.id,
          ),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
