import React,{useEffect} from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {checkUserSession} from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.jsx";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.jsx";
import Header from "./components/header/header.jsx";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.jsx";
import  {GlobalStyle} from "./globalstyles.js"



const App =({checkUserSession, currentUser})=>{

  useEffect(()=>{
    checkUserSession()
  },[checkUserSession])

    return (
      <div>
        <GlobalStyle/>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }

const mapDispatchToProps= (dispatch)=>({
  checkUserSession:()=> dispatch(checkUserSession())
})
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
