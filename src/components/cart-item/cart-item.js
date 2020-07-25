import React from "react";
import "./cart-item.scss";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../checkout-item/close.svg";
import {
  clearItemFromCart,
} from "../../redux/cart/cart.actions";
const CartItem = ({item,clearItem} ) => {
  const { imageUrl, price, name, quantity}= item
  return(
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x R${price}
      </span>
    </div>
    <Logo className="remove-button" onClick={() => clearItem(item)}/>
      
  </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),})

export default connect(null,mapDispatchToProps) (CartItem);
