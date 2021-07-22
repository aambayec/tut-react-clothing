import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JFLTaEMlHhm33yCYHzzYqX7tbALX5dZaq7veYlKFb7budMSqAAlBeen7Ts4kOfpdxNGoaKhA7owCmBoNW0uib8J00IAO3pCzv";

  const onToken = (token) => {
    axios
      .post("payment", {
        amount: priceForStripe,
        token,
      })
      .then((response) => {
        console.log("Payment was successful: ", response);
        alert("Payment was successful");
      })
      .catch((error) => {
        console.log("Payment error: ", error);
        alert(
          "There was an issue with our payment. Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Tut React Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
