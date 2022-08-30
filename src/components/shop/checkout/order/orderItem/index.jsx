import React from "react";
import { Container } from "./style";
import Img from "../../../../../assets/blogImg/04.svg";

const OrderIndex = ({ info }) => {
  return (
    <Container>
      <div className="img-part">
        <img src={info?.img || Img} alt="img" />
        <div>
          <p>{info?.name || "Barberton Daisy"}</p>
          <span>SKU: {info?.sku || "119955656412"}</span>
        </div>
      </div>
      <p className="count">(x{info?.count || "0"})</p>
      <h2 className="price">$ {info?.price || "238"}.00</h2>
    </Container>
  );
};

export default OrderIndex;
