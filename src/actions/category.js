import * as api from "../api/index.js";
import { GETCATEGORY } from "../constants/actiontypes.js";

export const getCategory = () => async (dispatch) => {
  try {
    const { data } = await api.getCategory();
    dispatch({ type: GETCATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
