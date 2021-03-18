import { PRODUCT_LIST_BY_ID } from '../constants/productConstant.js';

export const productById = (state = { productListById: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_BY_ID:
      return { productListById: action.payload };
    default:
      return state;
  }
};
