import { CONTENT_LOADED, LOAD_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    reading_list: [],
    contents: [],
  };

const contentReducer = (state = initialState, action) => {

    switch(action.type){
        case LOAD_CONTENT:
      return {
        ...state,
        contents: action.payload,
      };
        case CONTENT_LOADED:
      return {
        ...state,
        contents: action.payload,
      };
    default:
      return state;
    }
  }

export default contentReducer;