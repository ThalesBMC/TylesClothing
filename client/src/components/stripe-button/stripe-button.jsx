import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import { connect } from "react-redux";
import{setSuccess} from "../../redux/success/sucess.actions.js"
import {clearTotalCart} from "../../redux/cart/cart.actions"
import axios from "axios"
const StripeCheckoutButton=({price,hidden,dispatch})=>{
    const priceForStripe = price *100;
    const publishableKey='pk_test_51H5PtkIf9Ox52gPcfpdyUhTQzqArAfc3pTKopp6yhKTnsDMS8ScZa3XcWo2kYwOBVoCVVS51UbD8ZzJJnzEXxhiT00AXeud9J6'
    const onToken = token =>{
        axios({url:'payment',method:'post', data:{
            amount:priceForStripe,
            token
        }}).then(response=>{
            dispatch(clearTotalCart())
            dispatch(setSuccess(true))   
            setTimeout(()=>{
                dispatch(setSuccess(false))
            },6000)
        }).catch(error=>{
            console.log("Payment Error:", JSON.parse(error))
            alert("There was an issue with your payment.")
        })
        
    }
    return(
    <div>
        <div>
            <StripeCheckout  label='Pay Now'
                name= 'Thales Clothing Ltd.'
                billingAddress
                shippingAddress
                image ='https://sendeyo.com/up/d/f3eb2117da'
                description={`Your Total is ${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token ={onToken}
                stripeKey={publishableKey}
            />
        </div>
           
 </div>
        
    )
}


  export default connect(null)(StripeCheckoutButton);
  