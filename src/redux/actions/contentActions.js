import { CONTENT_LOADED, LOAD_CONTENT , ADD_CONTENT, DELETE_CONTENT, UPDATE_CONTENT} from "../actionTypes/actionTypes";

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
  //to add new content
  export const addContent = (data) => {
    return {
      type: ADD_CONTENT,
      payload: data,
    };
  };
  //to delete content
  export const deleteContent = (id) => {
    return {
      type: DELETE_CONTENT,
      payload: id,
    };
  };

  export const modifyContent = (content) =>{
    return{
      type: UPDATE_CONTENT,
      payload: content
    }
  }
