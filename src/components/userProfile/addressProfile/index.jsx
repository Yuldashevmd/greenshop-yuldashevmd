import React, { useState } from "react";
import ButtonDiv from "../../genericComp/Button";
import { Container, Form } from "./style";

const AddressProfile = () => {
  const [data, setData] = useState();

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onClick = () => {
    console.log(data);
  };
  return (
    <>
      <Container>
        <h2>Billing Address</h2>
        <Form>
          <div className="left-data">
            <div className="input-block">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" onChange={onChange} />
            </div>
            <div className="input-block">
              <label htmlFor="country">Country / Region</label>
              <select name="country" onChange={onChange}>
                <option>Select a country / region</option>
                <option value="Olmazor">Tashkent,Olmazor district</option>
                <option value="Shaykhontokhur">
                  Tashkent,Shaykhontokhur district
                </option>
                <option value="Uchtepa">Tashkent,Uchtepa district</option>
                <option value="Mirzo-Ulugbek">
                  Tashkent,Mirzo-Ulugbek district
                </option>
                <option value="Yakkasaroy">Tashkent,Yakkasaroy district</option>
                <option value="Yashnaobod">Tashkent,Yashnaobod district</option>
                <option value="Yunusobod">Tashkent,Yunusobod district</option>
                <option value="Bektemir">Tashkent,Bektemir district</option>
                <option value="Chilonzor">Tashkent,Chilonzor district</option>
              </select>
            </div>
            <div className="input-block">
              <label htmlFor="streetAddress">Street Address</label>
              <input
                onChange={onChange}
                type="text"
                name="streetAddress"
                placeholder="House number and street name"
              />
            </div>
            <div className="input-block">
              <label htmlFor="state">State</label>
              <input type="text" name="state" placeholder="Select a state" />
            </div>
            <div className="input-block">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" onChange={onChange} />
            </div>
          </div>
          <div className="left-data">
            <div className="input-block">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" onChange={onChange} />
            </div>
            <div className="input-block">
              <label htmlFor="city">Town / City</label>
              <input type="text" name="city" onChange={onChange} />
            </div>
            <div className="input-block">
              <label htmlFor="apartment"></label>
              <input
                type="text"
                name="apartment"
                placeholder="Appartment, suite, unit, etc. (optional)"
                onChange={onChange}
              />
            </div>
            <div className="input-block">
              <label htmlFor="zip">Zip</label>
              <input type="number" name="zip" onChange={onChange} />
            </div>
            <div className="input-block">
              <label htmlFor="phone">Phone Number</label>
              <div className="phone__countryCode">
                <select name="phoneCode" onChange={onChange}>
                  <option value="uzb">+998</option>
                  <option value="usa">+746</option>
                  <option value="rus">+760</option>
                </select>
                <input type="number" name="phone" onChange={onChange} />
              </div>
            </div>
          </div>
        </Form>
        <ButtonDiv onClick={onClick} type="green" width="131px">
          Save Change
        </ButtonDiv>
      </Container>
    </>
  );
};

export default AddressProfile;
