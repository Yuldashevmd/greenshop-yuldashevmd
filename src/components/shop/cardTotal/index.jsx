import React, { useContext, useState } from "react";
import { Container, Link, Total } from "./style";
import ButtonDiv from "../../genericComp/Button";
import { ContextWrapper } from "../../context";
import { useNavigate } from "react-router-dom";

const CardTotal = ({ info }) => {
  const { countData } = useContext(ContextWrapper);
  const [count] = countData;
  const [errText, setErrText] = useState("");
  const navigate = useNavigate();
  const toCheckout = () => {
    count === 0 ? setErrText("None item selected") : navigate("/shop/checkout");
    setTimeout(() => {
      setErrText("");
    }, 2500);
  };
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
          <span>$ {count * info?.price || count * 119}.00</span>
        </div>
        <div className="details">
          <p>Coupon Discount</p>
          <span>(-) 00.00</span>
        </div>
        <div className="details">
          <p>Shiping</p>
          <span>$ {info?.shipping || 16}.00</span>
        </div>
        <span className="viewShip">View shipping charge</span>
      </form>
      <Total>
        <p>Total</p>
        <span>
          ${" "}
          {count * info?.price + info?.shipping || count
            ? count * 119 + 16
            : count}
          .00
        </span>
      </Total>
      <ButtonDiv onClick={toCheckout} type="green" width="332px" height="40px">
        Proceed To Checkout
      </ButtonDiv>

      <Link>Continue Shopping</Link>
      <h1
        style={
          errText
            ? {
                textAlign: "center",
                color: "#fdfffd",
                width: "332px",
                background: "#d9363e",
                padding: "10px",
              }
            : null
        }
      >
        {errText}
      </h1>
    </Container>
  );
};

export default CardTotal;
