import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdown.styles.jsx";
import { Button } from "../button/Button";
import { CartItem } from "../cart-item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const CartDropdown = () => {
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const { cartItems } = useContext(CartContext);
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropDownContainer>
  );
};
