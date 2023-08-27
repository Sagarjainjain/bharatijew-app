import { GETMELTING } from "../constants/actiontypes.js";

export const melting = (melting = [], action) => {
  switch (action.type) {
    case GETMELTING:
      return action.payload;
    default:
      return melting;
  }
};
