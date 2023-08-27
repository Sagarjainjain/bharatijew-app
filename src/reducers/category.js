import { GETCATEGORY } from "../constants/actiontypes.js";

export const category = (category = [], action) => {
  switch (action.type) {
    case GETCATEGORY:
      return action.payload;
    default:
      return category;
  }
};
