import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
} from './constants/productConstant.js';
import axios from 'axios';

export const listProducts = async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const result = await axios.get('/api/products');
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    console.error(error);
  }
};
