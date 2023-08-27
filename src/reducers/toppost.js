import { GETTOPPOST } from "../constants/actiontypes.js";

export const toppost = (toppost = [], action) => {
  switch (action.type) {
    case GETTOPPOST:
      return action.payload;
    default:
      return toppost;
  }
};
