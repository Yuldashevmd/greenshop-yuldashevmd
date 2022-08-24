import { Select } from "antd";
import React from "react";
const { Option } = Select;

const SelectInput = () => (
  <Select
    labelInValue
    defaultValue={{
      value: "Default sorting",
      label: "Default sorting",
    }}
    style={{
      width: 120,
    }}
  >
    <Option value="data">data</Option>
    <Option value="name">name</Option>
  </Select>
);

export default SelectInput;
