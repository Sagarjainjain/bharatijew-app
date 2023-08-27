import { GETBANNER } from "../constants/actiontypes.js";

export const banner = (banner = [], action) => {
  switch (action.type) {
    case GETBANNER:
      return action.payload;
    default:
      return banner;
  }
};
