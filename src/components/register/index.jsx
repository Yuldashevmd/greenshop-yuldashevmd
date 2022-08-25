import React from "react";
import ButtonDiv from "../genericComp/Button";
import { BtnMethods, Content, Form, Input, OtherMethods } from "./style";
import { useFormik } from "formik";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (value) => console.log(value),
  });
  return (
    <Content>
      <Form>
        <label htmlFor="email">
          Enter your username and password to register.
        </label>
        <Input
          onChange={formik?.handleChange}
          type="text"
          placeholder="Username"
          name="username"
        />
        <Input
          onChange={formik?.handleChange}
          type="email"
          placeholder="Enter your email address"
          name="email"
        />
        <Input
          onChange={formik?.handleChange}
          type="password"
          placeholder="Password"
          name="password"
        />
        <Input
          onChange={formik?.handleChange}
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
        />

        <ButtonDiv
          onClick={formik?.handleSubmit}
          width="300px"
          height="45px"
          type="green"
          className="btn"
        >
          Register
        </ButtonDiv>
      </Form>
      <OtherMethods>
        <div></div>
        <p>Or register with</p>
        <div></div>
      </OtherMethods>
      <BtnMethods>
        <ButtonDiv width="300px" height="45px">
          Continue with Google
        </ButtonDiv>
        <ButtonDiv width="300px" height="45px">
          Continue with Facebook
        </ButtonDiv>
      </BtnMethods>
    </Content>
  );
};

export default Register;
