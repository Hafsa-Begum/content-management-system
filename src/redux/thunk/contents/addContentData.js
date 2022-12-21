import { addContent } from "../../actions/contentActions";

const addContentData = (content) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://content-management-server-gold.vercel.app/content", {
      method: "POST",
      body: JSON.stringify(content),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(
        addContent({
          _id: data.insertedId,
          ...content,
        })
      );
    }
  };
};

export default addContentData;