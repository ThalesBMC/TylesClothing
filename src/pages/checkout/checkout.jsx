import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'
import {selectSuccessPayment} from '../../redux/success/sucess.selector.js'
import SuccessMessage from '../../components/success-message/success-message'
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
const CheckoutPage = ({ cartItems, total,hidden }) => (
  <div className="checkout-page">
     {hidden ? <SuccessMessage/> : null}
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL:${total}</span>
    </div>
    <div className="test-warning">
        *Please use the following teste credit card for payments*
        <br/>
        4242 4242 4242 4242 - exp:01/21 - cvv:123
      </div>
    <StripeCheckoutButton price={total}/>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  hidden: selectSuccessPayment,
});

export default connect(mapStateToProps)(CheckoutPage);
