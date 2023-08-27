import * as api from "../api/index.js";
import {
  GETBANNER,
} from "../constants/actiontypes.js";

export const getBanner = () => async (dispatch) => {
  try {
    const { data } = await api.getbanner();
    dispatch({ type: GETBANNER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

