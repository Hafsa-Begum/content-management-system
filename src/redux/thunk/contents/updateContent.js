import { modifyContent } from "../../actions/contentActions";

const updateContent = (id, content) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/content/${id}`, {
      method: "PUT",
      body: JSON.stringify(content),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(modifyContent(content));
    }
  };
};

export default updateContent;