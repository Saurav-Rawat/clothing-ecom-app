import "./CartDropdown.styles.scss";
import { Button } from "../button/Button";
import { CartItem } from "../cart-item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};