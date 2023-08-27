import * as api from "../api/index.js";
import { GETPRODUCTS, GETPRODUCTSBYID } from "../constants/actiontypes.js";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProduct();
    dispatch({ type: GETPRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getProductsBySearch = (searchData) => async (dispatch) => {
  try {
    const { data } = await api.getproductbysearch(searchData);
    dispatch({ type: GETPRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProductsbyId = (id) => async (dispatch) => {
  try {
    const {data} = await api.getProductbyId(id);
    dispatch({type: GETPRODUCTSBYID, payload: data});
  } catch (error) {
    console.log("Error", error);
  }
};