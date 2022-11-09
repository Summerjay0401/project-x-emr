import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import PageTitle from '../../components/PageTitle';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import axios, { authHeader } from "../../api";

import './Payments.css';

function Payments() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios.get(`payment/config`, {
      headers: authHeader()
    }).then(async (response) => {
      const { publishableKey } = await response.data;
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    axios
    .post(`payment/create-payment-intent`,
      JSON.stringify({}), {
        headers: authHeader()
      })
    .then(async (response) => {
      var { clientSecret } = await response.data;
      setClientSecret(clientSecret);
    });

  }, []);

  return (
    <>
      <PageTitle title="Pay here" />
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
      <Link to="/billing"><Button variant="outlined">Go Back</Button></Link>
    </>
  );
}

export default Payments;

