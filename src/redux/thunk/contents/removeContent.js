import { deleteContent } from "../../actions/contentActions";

const removeContent = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/content/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(deleteContent(id));
    }
  };
};

export default removeContent;