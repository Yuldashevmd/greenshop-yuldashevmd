import React, { useContext } from "react";
import { Container, PayMethod, Total } from "./style";
import ButtonDiv from "../../../genericComp/Button";
import { ContextWrapper } from "../../../context";
import OrderIndex from "./orderItem";
import { Collapse } from "antd";
import { ReactComponent as PayIcon } from "../../../../assets/footerImg/payment.svg";

const Order = ({ info }) => {
  const { countData } = useContext(ContextWrapper);
  const [count] = countData;
  const { Panel } = Collapse;
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  return (
    <Container>
      <h2>Cart Totals</h2>
      <form>
        <OrderIndex />
        <OrderIndex />
        <p className="couponText">
          Have a coupon code ? <span>Click here</span>
        </p>
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
      <PayMethod>
        <h3>Payment Method</h3>
        <Collapse accordion>
          <Panel header={<PayIcon />} key="1">
            <input type="number" placeholder="Card number" />
          </Panel>
          <Panel header="Dorect bank transfer" key="2">
            <input type="number" placeholder="Transit number" />
          </Panel>
          <Panel header="Cash on delivery" key="3">
            <input type="text" placeholder="Where to deliver" />
          </Panel>
        </Collapse>
      </PayMethod>
      <ButtonDiv type="green" width="100%" height="40px">
        Place Order
      </ButtonDiv>
    </Container>
  );
};

export default Order;
