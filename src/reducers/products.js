import { GETPRODUCTS, GETPRODUCTSBYSEARCH, GETPRODUCTSBYID } from "../constants/actiontypes.js";

export const products = (products = [], action) => {
  switch (action.type) {
    case GETPRODUCTS:
      return action.payload;
    case GETPRODUCTSBYSEARCH:
      return action.payload;
    default:
      return products;
  }
};
export const product = (product = [], action) => {
  switch (action.type) {
    case GETPRODUCTSBYID:
      return action.payload;
    default:
      return product;
  }
};
