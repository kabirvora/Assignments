import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const initialStore = {
    cartReducer:{
        cartProducts: JSON.parse(localStorage.getItem('cartProducts')) ?? []
    }
}
export const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools()
);