import React from "react";
import ButtonDiv from "../genericComp/Button";
import { BtnMethods, Content, Form, Input, OtherMethods } from "./style";
import { useFormik } from "formik";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => console.log(value),
  });
  return (
    <Content>
      <Form>
        <label htmlFor="email">
          Enter your username and password to login.
        </label>
        <Input
          onChange={formik?.handleChange}
          type="email"
          placeholder="example@gmail.com"
          name="email"
        />
        <Input
          onChange={formik?.handleChange}
          type="password"
          placeholder="password"
          name="password"
        />
        <p>Forgot Password</p>
        <ButtonDiv
          onClick={formik?.handleSubmit}
          width="300px"
          height="45px"
          type="green"
        >
          Login
        </ButtonDiv>
      </Form>
      <OtherMethods>
        <div></div>
        <p>Or login with</p>
        <div></div>
      </OtherMethods>
      <BtnMethods>
        <ButtonDiv width="300px" height="45px">
          Login with Google
        </ButtonDiv>
        <ButtonDiv width="300px" height="45px">
          Login with Facebook
        </ButtonDiv>
      </BtnMethods>
    </Content>
  );
};

export default SignIn;
