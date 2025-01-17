import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer, productReviewCreateReducer, productTopRatedReducer} from './reducers/productListReducers';
import { cartReducer } from './reducers/cartReducers';
import {userLoginReducer, userRegisterReducer, userDetailReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer} from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer, orderListReducer, orderDeliverReducer } from './reducers/orderReducers';
// Redux Store: The store receives this action and then passes it to all reducers to see if they need to update the state based on the action.
// Reducer’s Role: The reducer (productListReducer in this case) receives the action, checks its type (PRODUCT_LIST_REQUEST), and returns a new state object if it matches.
const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
    productDelete:productDeleteReducer,
    productCreate:productCreateReducer,
    productUpdate:productUpdateReducer,
    productReviewCreate:productReviewCreateReducer,
    productTopRated:productTopRatedReducer,

    cart: cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails: userDetailReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer,
    orderList:orderListReducer,
    orderDeliver:orderDeliverReducer,

})


const cartItemsFromStorage = localStorage.getItem('cartItem') ?
    (JSON.parse(localStorage.getItem('cartItem'))) :( [])
// console.log(cartItemsFromStorage)

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    (JSON.parse(localStorage.getItem('userInfo'))) :( null)
// console.log(cartItemsFromStorage)

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    (JSON.parse(localStorage.getItem('shippingAddress'))) :( {})
// console.log(cartItemsFromStorage)


const initialState = {
    cart: {
        cartItems:cartItemsFromStorage,
        shippingAddress:shippingAddressFromStorage
    },
    userLogin:{userInfo:userInfoFromStorage},
}
const middleware = [thunk]
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store