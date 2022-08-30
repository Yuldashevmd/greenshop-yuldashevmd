import React, { useContext } from "react";
import Img from "../../../assets/blogImg/01.svg";
import { ReactComponent as Delete } from "../../../assets/shopIcons/Delete.svg";
import { ContextWrapper } from "../../context";
import { Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

const Tr = ({ info }) => {
  const { countData } = useContext(ContextWrapper);
  const [count, setCount] = countData;
  const decr = () => {
    count <= 0 ? setCount(count) : setCount(count - 1);
  };
  const incr = () => {
    count >= 50 ? setCount(count) : setCount(count + 1);
  };
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "This item will be deleted",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <tr>
      <td className="product">
        <img src={info?.img || Img} alt="img" />
        <div className="product__info">
          <p>{info?.name || "Barberton Daisy"}</p>
          <span>{info?.sku || "SKU: 1995751877966"}</span>
        </div>
      </td>
      <td>$ {info?.price || 119}</td>
      <td className="count">
        <button onClick={decr}>-</button>
        {count}
        <button onClick={incr}>+</button>
      </td>
      <td className="total">$ {count * 119}</td>
      <td>
        <Button onClick={showDeleteConfirm}>
          <Delete className="delete" />
        </Button>
      </td>
    </tr>
  );
};

export default Tr;
