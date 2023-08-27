import { GETSUBCATEGORY } from "../constants/actiontypes.js";

export const subcategory = (subcategory = [], action) => {
  switch (action.type) {
    case GETSUBCATEGORY:
      return action.payload;
    default:
      return subcategory;
  }
};
