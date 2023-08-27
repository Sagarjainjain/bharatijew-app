import * as api from "../api/index.js";
import { GETSUBCATEGORY } from "../constants/actiontypes.js";

export const getSubCategory = () => async (dispatch) => {
  try {
    const { data } = await api.getSubCategory();
    dispatch({ type: GETSUBCATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
