import React, { useContext } from "react";
import { Container, Link, Total } from "./style";
import ButtonDiv from "../../genericComp/Button";
import { ContextWrapper } from "../../context";

const CardTotal = () => {
  const { count } = useContext(ContextWrapper);

  return (
    <Container>
      <h2>Cart Totals</h2>
      <form>
        <label htmlFor="text">Coupon Apply</label>
        <div className="form__input">
          <input
            type="text"
            name="text"
            placeholder="Enter coupon code here..."
          />
          <button>Apply</button>
        </div>
        <div className="details">
          <p>Subtotal</p>
          <span>$2,683.00</span>
        </div>
        <div className="details">
          <p>Coupon Discount</p>
          <span>(-) 00.00</span>
        </div>
        <div className="details">
          <p>Shiping</p>
          <span>$16.00</span>
        </div>
        <span className="viewShip">View shipping charge</span>
      </form>
      <Total>
        <p>Total</p>
        <span>${count}</span>
      </Total>
      <ButtonDiv type="green" width="332px" height="40px">
        Proceed To Checkout
      </ButtonDiv>
      <Link>Continue Shopping</Link>
    </Container>
  );
};

export default CardTotal;
