import {
  PRODUCT_LIST_BY_ID,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstant.js';

export const productById = (state = { productListById: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loader: true, productListById: [] };
    case PRODUCT_LIST_BY_ID:
      return { productListById: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loader: false, error: action.payload };
    default:
      return state;
  }
};
