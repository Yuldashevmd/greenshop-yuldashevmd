import React, { useContext, useReducer, useState } from "react";
import Img from "../../../assets/blogImg/01.svg";
import { ReactComponent as Delete } from "../../../assets/shopIcons/Delete.svg";
import { ContextWrapper } from "../../context";

const Tr = ({ info }) => {
  const [count, setCount] = useContext(ContextWrapper);
  const incr = () => (count <= 0 ? setCount(count) : setCount(count + 1));
  const decr = () => (count >= 50 ? setCount(count) : setCount(count - 1));
  return (
    <tr>
      <td className="product">
        <img src={info?.img || Img} alt="img" />
        <div className="product__info">
          <p>{info?.name || "Barberton Daisy"}</p>
          <span>{info?.sku || "SKU: 1995751877966"}</span>
        </div>
      </td>
      <td>${info?.price || 119}</td>
      <td className="count">
        <button onClick={decr}>-</button>
        {count}
        <button onClick={incr}>+</button>
      </td>
      <td className="total">${count * 119}</td>
      <td>
        <Delete className="delete" />
      </td>
    </tr>
  );
};

export default Tr;
