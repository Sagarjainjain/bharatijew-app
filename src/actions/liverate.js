import * as api from "../api/index.js";
import {
  GETLIVEGOLDRATE,
  GETLIVESILVERRATE,
} from "../constants/actiontypes.js";

export const getlivegoldrate = () => async (dispatch) => {
  try {
    const { data } = await api.getlivegoldrate();
    dispatch({ type: GETLIVEGOLDRATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getlivesilverrate = () => async (dispatch) => {
  try {
    const { data } = await api.getlivesilverrate();

    dispatch({ type: GETLIVESILVERRATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
