import React from "react";
import NavbarOther from "../../NavbarOther";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./stripe.css";
import { ProductConsumer } from "../../../context";

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

export default class StripeCheckout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavbarOther />
        <ProductConsumer>
          {(value) => {
            return (
              <div className="container-fluid">
                <div className="mt-5">
                  <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                    <CheckoutForm value={value} />
                  </Elements>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
