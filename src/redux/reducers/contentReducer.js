import { ADD_CONTENT, CONTENT_LOADED, LOAD_CONTENT, DELETE_CONTENT, UPDATE_CONTENT, GET_SINGLE_CONTENT, CLICK_TO_READ } from "../actionTypes/actionTypes";

const initialState = {
    reading_history: [],
    contents: [],
    content: {}
  };

const contentReducer = (state = initialState, action) => {
  const clickedContent = state.reading_history.find(
    (content) => content._id === action.payload._id
  );
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
      case GET_SINGLE_CONTENT:
      return {
        ...state,
        contents: state.contents.filter(
          (content) => content._id === action.payload
        ),
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
      //click to read content
      case CLICK_TO_READ:
      if (clickedContent) {
        const newReading_history = state.reading_history.filter(
          (content) => content._id !== clickedContent._id
        );
        return {
          ...state,
          reading_history: [...newReading_history, clickedContent],
        };
      }
      return {
        ...state,
        reading_history: [...state.reading_history, { ...action.payload, quantity: 1 }],
      };
    default:
      return state;
    }
  }

export default contentReducer;