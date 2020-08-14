import React from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "./close.svg";
import { ReactComponent as Logo2 } from "./plus.svg";

import { ReactComponent as Logo3 } from "./minus.svg";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  //destructure this way so we can have access to cartItem instead of cartItem:{id,image,etc}
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"  />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
         <Logo3 className="minus-button"/>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          <Logo2 className="add-button"/>
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        <Logo/>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
