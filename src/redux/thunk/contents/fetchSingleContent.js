import { getSingleContent } from "../../actions/contentActions";

const fetchSingleContent = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/content/${id}`);
    const data = await res.json();

    if (data.status) {
      dispatch(getSingleContent(id));
    }
  };
};

export default fetchSingleContent;