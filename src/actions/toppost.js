import * as api from "../api/index.js";
import { GETTOPPOST } from "../constants/actiontypes.js";
export const gettoppost = () => async (dispatch) => {
  try {
    const { data } = await api.gettoppost();
    dispatch({ type: GETTOPPOST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
