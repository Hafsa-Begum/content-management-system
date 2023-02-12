import { getSingleContent } from "../../actions/contentActions";

const fetchSingleContent = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://content-management-server-gold.vercel.app/content/${id}`);
    const data = await res.json();

    if (data.status) {
      dispatch(getSingleContent(id));
    }
  };
};

export default fetchSingleContent;