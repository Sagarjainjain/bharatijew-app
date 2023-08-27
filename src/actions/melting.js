import * as api from "../api/index.js";
import { GETMELTING } from "../constants/actiontypes.js";

export const getMelting = () => async (dispatch) => {
  try {
    const { data } = await api.getMelting();
    dispatch({ type: GETMELTING, payload: data });
  } catch (error) {
    console.log(error);
  }
};
