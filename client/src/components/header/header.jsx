import React from "react";


import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import "./header.scss";
import {signOutStart} from "../../redux/user/user.actions"
import CartDropdown from "../cart/cart";
import CartIcon from "../cart-icon/cart-icon";
import {HeaderContainer,LogoContainer,OptionsContainer,  OptionLink} from "./header.style"
// "as" no optionLink serve para caso queira uma div e não queira reescrever o codigo só para trocar o componenete que quer
//no caso no styled(link) n preciso fzr outro que seja styled.div para o mesmo estilo.
const Header = ({ currentUser, hidden,signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer >
      <OptionLink  to="/shop">
       SHOP
      </OptionLink>
      <OptionLink  to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div"  onClick={signOutStart}>
          
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink   to="/signin">SIGN IN
        </OptionLink>
      )}
     
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
const mapDispatchToProps= dispatch=>({
  signOutStart:()=> dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
