import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import {Button, Checkbox, Text} from 'evergreen-ui';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [checked, setChecked] = React.useState(true)

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
      <>
        {paymentComplete ?
            <>
              <h1>Payment Complete</h1>
            </>:
            <>
              <form id="payment-form" onSubmit={handleSubmit}>
                <LinkAuthenticationElement
                    id="link-authentication-element"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <PaymentElement id="payment-element" options={paymentElementOptions} />
                {/*<Text color={"white"}>By ticking this box, I confirm I am a UK taxpayer making a personal donation and underestand if I pay less Income Tax and/or Capital Gains than the amount claimed of Gift Aid claimed on all my donations, it is my responsibility to pay and difference.</Text>
                */}
                <Checkbox
                    label={"I would like to claim Gift Aid on my donation"}
                    checked={checked}
                    onChange={e => setChecked(e.target.checked)}
                />
                <Button marginTop={20} disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
                </Button>
                {}
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
              </form>
            </>
        }
      </>
  );
}
