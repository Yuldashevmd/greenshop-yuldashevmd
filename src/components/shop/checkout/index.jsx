import React from "react";
import BillingAddress from "./billingAddress";
import Order from "./order";
import { Container, Link, Wrapper } from "./style";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <h1>
        Home<Link to="/shop">{pathname}</Link>
      </h1>
      <Wrapper>
        <BillingAddress />
        <Order />
      </Wrapper>
    </Container>
  );
};

export default Checkout;
