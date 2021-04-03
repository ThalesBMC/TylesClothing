import React,{useLayoutEffect, useRef} from "react";
import "./cart-item.scss";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../checkout-item/close.svg";
import {
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

import AOS from 'aos';
import 'aos/dist/aos.css';
const CartItem = ({item,clearItem} ) => {
  const { imageUrl, price, name, quantity}= item
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth", block:'end',inline:'end' })
  }

  useLayoutEffect(()=>{
    AOS.init({once: true, delay:100})
    AOS.refresh()
    scrollToBottom()
    
   },[item])
  return(
  <div data-aos='zoom-in' ref={messagesEndRef}  className="cart-item">
    <img src={imageUrl} alt="item" className="border" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span  className="price animation">
        {quantity} x R${price}
      </span>
    </div>
    <Logo  className="remove-button" onClick={() => clearItem(item)} />
      
  </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item))})

export default connect(null,mapDispatchToProps) (React.memo(CartItem));
