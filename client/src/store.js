import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {productListReducer, productDetailsReducer} from './reducers/productListReducers';


// Redux Store: The store receives this action and then passes it to all reducers to see if they need to update the state based on the action.
// Reducer’s Role: The reducer (productListReducer in this case) receives the action, checks its type (PRODUCT_LIST_REQUEST), and returns a new state object if it matches.
const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
})
const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store