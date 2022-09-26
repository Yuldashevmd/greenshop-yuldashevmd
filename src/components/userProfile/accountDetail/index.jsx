import React from "react";
import { useState } from "react";
import ButtonDiv from "../../genericComp/Button";
import { Container, Form } from "./style";

const AccountDetail = () => {
  const [data, setData] = useState();
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onClick = () => {
    console.log(data);
  };
  return (
    <Container>
      <h3>Personal Information</h3>
      <Form>
        <div className="wrapper">
          <div className="block">
            <label htmlFor="firstname">First Name</label>
            <input onChange={onChange} name="firstname" type="text" />
          </div>
          <div className="block">
            <label htmlFor="email">Email address</label>
            <input onChange={onChange} name="email" type="text" />
          </div>
          <div className="block">
            <label htmlFor="username">Username</label>
            <input onChange={onChange} name="username" type="text" />
          </div>
          <p>Password change</p>
          <div className="block">
            <label htmlFor="password">Current password</label>
            <input onChange={onChange} name="password" type="text" />
          </div>
          <div className="block">
            <label htmlFor="newpassword">New password</label>
            <input onChange={onChange} name="newpassword" type="text" />
          </div>
          <div className="block">
            <label htmlFor="confirmnewpassword">Confirm new password</label>
            <input onChange={onChange} name="confirmnewpassword" type="text" />
          </div>
        </div>
        <div className="wrapper">
          <div className="block">
            <label htmlFor="lastname">Last Name</label>
            <input onChange={onChange} name="lastname" type="text" />
          </div>
          <div className="block">
            <label htmlFor="phone">Phone Number</label>
            <input onChange={onChange} name="phone" type="text" />
          </div>
          <div className="block">
            <span>Photo</span>
            <input onChange={onChange} name="file" type="file" />
          </div>
        </div>
      </Form>
      <ButtonDiv onClick={onClick} type="green" width="131px">
        Save Change
      </ButtonDiv>
    </Container>
  );
};

export default AccountDetail;
