import { TOGGLE_TOPIC } from "../actionTypes/actionTypes";

export const toggleTopic = (topicName) => {
    return {
      type: TOGGLE_TOPIC,
      payload: topicName,
    };
  };