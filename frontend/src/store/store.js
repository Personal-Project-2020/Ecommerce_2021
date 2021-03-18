import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducer.js';
import { productById } from './reducers/productByIdReducer.js';

const reducer = combineReducers({
  productList: productListReducer,
  itemProduct: productById,
});
const initialState = {};
const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
