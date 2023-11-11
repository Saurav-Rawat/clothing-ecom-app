import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../../components/cart-icon/CartIcon";
import { CartDropdown } from "../../components/cart-dropdown/CartDropdown";
import { CartContext } from "../../context/CartContext";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await SignOutUser();
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutHandler}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
