import axios from 'axios';

import { CART_ADD_ITEM } from '../constants/cartConstant.js';

export const cartAction = (id, qty) => async (dispatch, getState) => {
  let result = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: result.data._id,
      name: result.data.name,
      image: result.data.image,
      price: result.data.price,
      countInStock: result.data.countInStock,
      qty,
    },
  });
  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cartList.cartCollection)
  );
};
