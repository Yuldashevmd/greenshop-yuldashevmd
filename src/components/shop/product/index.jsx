import React from "react";
import { Table } from "./style";
import Tr from "./tbody";

const ProductTable = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <Tr />
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
