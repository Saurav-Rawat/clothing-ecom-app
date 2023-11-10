import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Checkout.styles.scss";
import { CheckoutItem } from "../../components/checkout-item/CheckoutItem";

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
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
      {cartItems.map((item) => {
        const { id } = item;
        return <CheckoutItem key={id} item={item} />;
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};
