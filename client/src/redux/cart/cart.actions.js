import { CartActionTypes } from "./cart.type";
export const setToggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
export const clearTotalCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const updateCartInFirebase = () => ({
  type: CartActionTypes.UPDATE_CART_IN_FIREBASE
});

export const setCartFromFirebase = cartItems => ({
  type: CartActionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems
});

