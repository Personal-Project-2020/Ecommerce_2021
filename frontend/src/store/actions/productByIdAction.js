import axios from 'axios';
import { PRODUCT_LIST_BY_ID } from '../constants/productConstant.js';

export const itemProduct = (id) => async (dispatch) => {
  let result = await axios.get(`/api/products/${id}`);

  dispatch({
    type: PRODUCT_LIST_BY_ID,
    payload: result.data,
  });
};
