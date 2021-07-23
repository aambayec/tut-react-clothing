import { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import "./checkout.styles.scss";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        NO: 4242 4242 4242 4242 EXP: 10/29 CW: 123
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

export default CheckoutPage;
