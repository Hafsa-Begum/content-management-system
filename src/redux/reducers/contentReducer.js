import { ADD_CONTENT, CONTENT_LOADED, LOAD_CONTENT, DELETE_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

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
      case ADD_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };
      //to delete content
      case DELETE_CONTENT:
      return {
        ...state,
        contents: state.contents.filter(
          (content) => content._id !== action.payload
        ),
      };
      //to update content
      case UPDATE_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload]
      };
    default:
      return state;
    }
  }

export default contentReducer;