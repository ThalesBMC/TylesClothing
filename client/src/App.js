import React,{useEffect,lazy, Suspense} from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {checkUserSession} from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";



import Header from "./components/header/header.jsx";
import  {GlobalStyle} from "./globalstyles.js"


import Spinner from "./components/spinner/spinner.jsx";
const HomePage = lazy(()=> import("./pages/homepage/homepage.component"))
const ShopPage = lazy(() => import("./pages/shop/shop.jsx"))
const SignInSignUp = lazy(()=> import("./pages/sign-in-sign-up/sign-in-sign-up.jsx"))
const ContactPage = lazy(()=> import("./pages/contact/contact"))
const CheckoutPage = lazy(()=> import("./pages/checkout/checkout.jsx"))

const App =({checkUserSession, currentUser})=>{

  useEffect(()=>{
    checkUserSession()
  },[checkUserSession])

    return (
      <div>
        <GlobalStyle/>
        <Header />
        <Switch>
          <Suspense fallback={<Spinner/>}>
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
            <Route exact path="/contact" component={ContactPage} />
          </Suspense>
          
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
