import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducer.js';
import { productById } from './reducers/productByIdReducer.js';
import { cartReducer } from './reducers/cartReducer.js';

const reducer = combineReducers({
  productList: productListReducer,
  itemProduct: productById,
  cartList: cartReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cartList: { cartCollection: cartItemsFromLocalStorage },
};
const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
