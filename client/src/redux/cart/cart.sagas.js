  
import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { getUserCartRef } from '../../firebase/firebase';
import UserActionTypes from '../user/user.type';
import { selectCurrentUser } from '../user/user.selector';
import { clearTotalCart, setCartFromFirebase } from './cart.actions';
import { selectCartItems } from './cart.selectors';
import CartActionTypes from './cart.type'
export function* updateCartInFirebase() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {
      try {
        const cartRef = yield getUserCartRef(currentUser.id);
        const cartItems = yield select(selectCartItems);
        yield cartRef.update({ cartItems });
      } catch (error) {
        console.log(error);
      }
    }
  }

export function* checkCartFromFirebase({ payload: user }) {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
  }
export function* onUserSignIn() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
  }
export function* onCartChange() {
    yield takeLatest(
      [
        CartActionTypes.ADD_ITEM,
        CartActionTypes.REMOVE_ITEM,
        CartActionTypes.CLEAR_ITEM_FROM_CART,
        CartActionTypes.CLEAR_CART
      ],
      updateCartInFirebase,
    );
  }

export function* clearCartOnSignOut(){
    yield put(clearTotalCart())
}
export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas(){
    yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}