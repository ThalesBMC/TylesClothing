import { CartActionTypes } from "./cart.type";
import { removeItemFromCart, addItemToCart } from "./cart.utils";
const INITIAL_START = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (state = INITIAL_START, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_CART:
    return {
      ...state,
      cartItems: []
    };

    default:
      return state;
  }
};
export default cartReducer;
