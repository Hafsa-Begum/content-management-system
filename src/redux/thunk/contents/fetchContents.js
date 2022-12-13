import { loadContent} from "../../actions/contentActions";

const loadContentData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/contents");
    const data = await res.json();

    if (data.data.length) {
      dispatch(loadContent(data.data));
    }
  };
};

export default loadContentData;