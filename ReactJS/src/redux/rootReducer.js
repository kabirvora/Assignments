import {combineReducers} from 'redux'
import { cartReducer } from './cartReducer'
import { quantityReducer } from './quantityReducer'

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    quantityReducer: quantityReducer
})

export default rootReducer