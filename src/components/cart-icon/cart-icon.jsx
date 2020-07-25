import React from "react";
import { connect } from "react-redux";
import { setToggleCart } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
const CartIcon = ({ setToggleCart, itemCount }) => (
  <div className="cart-icon" onClick={setToggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setToggleCart: () => dispatch(setToggleCart()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
