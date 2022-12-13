import { CONTENT_LOADED, LOAD_CONTENT } from "../actionTypes/actionTypes";

export const loadContent = (data) => {
    return {
      type: LOAD_CONTENT,
      payload: data,
    };
  };
export const loaded = (contents) => {
    return {
      type: CONTENT_LOADED,
      payload: contents,
    };
  };