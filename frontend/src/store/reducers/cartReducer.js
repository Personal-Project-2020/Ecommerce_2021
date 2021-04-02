import { CART_ADD_ITEM } from '../constants/cartConstant.js';
//import { CART_REMOVE_ITEM } from '../constants/cartConstant.js';
export const cartReducer = (state = { cartCollection: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existsOnCartCollectionItem = state.cartCollection.find(
        (singleProduct) =>
          singleProduct.product === item.product ? item : singleProduct
      );
      if (existsOnCartCollectionItem) {
        return {
          ...state,
          cartCollection: state.cartCollection.map((x) =>
            x.product === existsOnCartCollectionItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartCollection: [...state.cartCollection, item] };
      }

    default:
      return state;
  }
};
