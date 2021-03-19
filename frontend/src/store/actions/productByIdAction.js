import axios from 'axios';

import {
  PRODUCT_LIST_BY_ID,
  PRODUCT_LIST_REQUEST,
} from '../constants/productConstant.js';

export const itemProduct = (id, error) => async (dispatch) => {
  let result = await axios.get(`/api/products/${id}`);
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  dispatch({
    type: PRODUCT_LIST_BY_ID,
    payload: result.data,
  });
  // dispatch({
  //   type: PRODUCT_LIST_FAIL,
  //   payload:
  //     error.response && error.response.data.Message
  //       ? error.response.data.Message
  //       : error.Message,
  // });
};
