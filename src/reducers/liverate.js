import {
  GETLIVEGOLDRATE,
  GETLIVESILVERRATE,
} from "../constants/actiontypes.js";

export const goldrate = (goldrate = [], action) => {
  switch (action.type) {
    case GETLIVEGOLDRATE:
      return action.payload;
    default:
      return goldrate;
  }
};
export const silverrate = (silverrate = [], action) => {
  switch (action.type) {
    case GETLIVESILVERRATE:
      return action.payload;
    default:
      return silverrate;
  }
};
