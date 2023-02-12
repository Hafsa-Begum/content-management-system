import { TOGGLE_TOPIC} from "../actionTypes/actionTypes";

export const initialState = {
  filters: {
    topics: [],
  },
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TOPIC:
      if (!state.filters.topics.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            topics: [...state.filters.topics, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            topics: state.filters.topics.filter(
              (topic) => topic !== action.payload
            ),
          },
        };
      }
    default:
      return state;
  }
};